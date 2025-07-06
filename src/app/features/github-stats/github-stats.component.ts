import { GithubService } from './../../core/services/github.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.css']
})
export class GithubStatsComponent implements OnInit {
  githubData: any;
  avatarUrl: string = "";
  repositories: any[] = [];
  commits: any[] = [];
  stargazers: any[] = [];
  isLoading: boolean = true;
  apiLimitReached: boolean = false;
  lastUpdated: string = '';

  readonly userName: string = "ZahraneRabhi";
  readonly cacheKey: string = 'github_stats_last_updated';

  constructor(private githubService: GithubService) {}

  loadAllData() {
    this.isLoading = true;
    this.apiLimitReached = false;
    
    // Get user profile data
    this.githubService.getData(this.userName)
      .pipe(
        catchError(error => {
          console.error('Error fetching GitHub user data:', error);
          this.apiLimitReached = true;
          return of(null);
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.githubData = data;
          this.avatarUrl = data.avatar_url;
        }
      });

    // Get repositories and related data
    this.githubService.getRepos(this.userName)
      .pipe(
        catchError(error => {
          console.error('Error fetching repositories:', error);
          this.apiLimitReached = true;
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
          this.updateLastUpdatedTime();
        })
      )
      .subscribe((data: any) => {
        if (data && data.length) {
          this.repositories = data;
          this.getTotalCommits();
          this.getStars();
        }
      });
  }

  getStars() {
    if (this.repositories && this.repositories.length) {
      this.stargazers = []; 
      
      // Create an array of observables for all star requests
      const starRequests = this.repositories.map(repo => 
        this.githubService.getStars(repo.name, this.userName).pipe(
          catchError(error => {
            console.warn(`Error fetching stars for ${repo.name}:`, error);
            return of([]);
          })
        )
      );
      
      // Execute all requests in parallel
      forkJoin(starRequests).subscribe(results => {
        results.forEach(stars => {
          if (stars && stars.length) {
            this.stargazers = [...this.stargazers, ...stars];
          }
        });
      });
    }
  }
  
  getTotalCommits() {
    if (this.repositories && this.repositories.length) {
      this.commits = [];
      
      // Only fetch commits for the first 5 repos to avoid rate limiting
      const reposToFetch = this.repositories.slice(0, 5);
      
      // Create an array of observables for commit requests
      const commitRequests = reposToFetch.map(repo => 
        this.githubService.getRepoCommits(repo.name, this.userName).pipe(
          catchError(error => {
            console.warn(`Error fetching commits for ${repo.name}:`, error);
            return of([]);
          })
        )
      );
      
      // Execute all requests in parallel
      forkJoin(commitRequests).subscribe(results => {
        results.forEach(commits => {
          if (commits && commits.length) {
            this.commits = [...this.commits, ...commits];
          }
        });
      });
    }
  }

  updateLastUpdatedTime() {
    const now = new Date();
    this.lastUpdated = now.toLocaleString();
    localStorage.setItem(this.cacheKey, this.lastUpdated);
  }

  getLastUpdatedTime(): string {
    const saved = localStorage.getItem(this.cacheKey);
    return saved || 'Never';
  }
  
  forceRefresh() {
    this.githubService.refreshAllData(this.userName);
    this.loadAllData();
  }
  
  ngOnInit() {
    this.lastUpdated = this.getLastUpdatedTime();
    this.loadAllData();
  }
}
