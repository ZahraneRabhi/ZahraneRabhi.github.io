import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface GitHubStats {
  repoCount: number;
  totalStars: number;
  totalCommits: number;
  followers: number;
  avatarUrl: string;
  login: string;
  cachedAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly CACHE_KEY = 'github_stats_v3';
  private readonly CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

  constructor(private http: HttpClient) {}

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
    // The commits search API needs this preview header to return total_count
    const searchHeaders = new HttpHeaders({
      Accept: 'application/vnd.github.cloak-preview+json',
    });

    return forkJoin({
      user: this.http
        .get<any>(`https://api.github.com/users/${username}`)
        .pipe(catchError(() => of(null))),

      repos: this.http
        .get<any[]>(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        )
        .pipe(catchError(() => of([]))),

      // per_page=1 → minimal payload; total_count gives the real commit count
      commits: this.http
        .get<any>(
          `https://api.github.com/search/commits?q=author:${username}&per_page=1`,
          { headers: searchHeaders }
        )
        .pipe(catchError(() => of(null))),
    }).pipe(
      map(({ user, repos, commits }) => {
        const repoList: any[] = Array.isArray(repos) ? repos : [];
        if (!user && !repoList.length) return null;

        const stats: GitHubStats = {
          repoCount: user?.public_repos ?? repoList.length,
          totalStars: repoList.reduce(
            (sum: number, r: any) => sum + (r.stargazers_count || 0),
            0
          ),
          totalCommits: commits?.total_count ?? 0,
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
