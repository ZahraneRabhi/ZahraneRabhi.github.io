import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface GitHubStats {
  repoCount: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  avatarUrl: string;
  login: string;
  cachedAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly CACHE_KEY = 'github_stats_v2';
  // 7-day TTL — portfolio stats don't change minute to minute
  private readonly CACHE_TTL = 7 * 24 * 60 * 60 * 1000;

  constructor(private http: HttpClient) {}

  // Only 2 API calls: user profile + repos list.
  // Stars and forks are derived from the repos response (repo.stargazers_count,
  // repo.forks_count), so zero extra per-repo requests are needed.
  getStats(username: string): Observable<GitHubStats | null> {
    const cached = this.readCache();
    if (cached) return of(cached);
    return this.fetchFromApi(username);
  }

  forceRefresh(username: string): Observable<GitHubStats | null> {
    localStorage.removeItem(this.CACHE_KEY);
    return this.fetchFromApi(username);
  }

  private fetchFromApi(username: string): Observable<GitHubStats | null> {
    return forkJoin({
      user: this.http
        .get<any>(`https://api.github.com/users/${username}`)
        .pipe(catchError(() => of(null))),
      repos: this.http
        .get<any[]>(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        )
        .pipe(catchError(() => of([]))),
    }).pipe(
      map(({ user, repos }) => {
        const repoList: any[] = Array.isArray(repos) ? repos : [];
        if (!user && !repoList.length) return null;

        const stats: GitHubStats = {
          repoCount: user?.public_repos ?? repoList.length,
          totalStars: repoList.reduce(
            (sum: number, r: any) => sum + (r.stargazers_count || 0),
            0
          ),
          totalForks: repoList.reduce(
            (sum: number, r: any) => sum + (r.forks_count || 0),
            0
          ),
          followers: user?.followers ?? 0,
          avatarUrl: user?.avatar_url ?? '',
          login: user?.login ?? username,
          cachedAt: Date.now(),
        };

        this.writeCache(stats);
        return stats;
      })
    );
  }

  private writeCache(stats: GitHubStats): void {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(stats));
    } catch {}
  }

  private readCache(): GitHubStats | null {
    try {
      const raw = localStorage.getItem(this.CACHE_KEY);
      if (!raw) return null;
      const stats: GitHubStats = JSON.parse(raw);
      if (Date.now() - stats.cachedAt > this.CACHE_TTL) return null;
      return stats;
    } catch {
      return null;
    }
  }
}
