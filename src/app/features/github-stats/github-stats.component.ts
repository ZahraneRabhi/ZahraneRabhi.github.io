import { Component, OnInit } from '@angular/core';
import { GitHubStats, GithubService } from '../../core/services/github.service';

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.css']
})
export class GithubStatsComponent implements OnInit {
  stats: GitHubStats | null = null;
  isLoading = true;
  loadError = false;
  isRefreshing = false;

  readonly username = 'ZahraneRabhi';

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.isLoading = true;
    this.loadError = false;
    this.githubService.getStats(this.username).subscribe({
      next: data => {
        this.stats = data;
        this.isLoading = false;
      },
      error: () => {
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }

  refresh() {
    this.isRefreshing = true;
    this.githubService.forceRefresh(this.username).subscribe({
      next: data => {
        this.stats = data;
        this.isRefreshing = false;
      },
      error: () => {
        this.loadError = true;
        this.isRefreshing = false;
      }
    });
  }

  get isFromCache(): boolean {
    if (!this.stats) return false;
    // If cachedAt is more than 5 seconds old it was loaded from storage, not just written
    return Date.now() - this.stats.cachedAt > 5000;
  }

  get cacheAge(): string {
    if (!this.stats) return '';
    const ms = Date.now() - this.stats.cachedAt;
    const minutes = Math.floor(ms / 60000);
    const hours = Math.floor(ms / 3600000);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'just now';
  }
}
