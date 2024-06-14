import { GithubService } from './../../core/services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.css']
})
export class GithubStatsComponent implements OnInit {
  githubData: any;
  avatarUrl: string = "";
  repositories: any;
  commits: any = [];
  stargazers: any = [];

  readonly userName: string = "ZahraneRabhi";
  readonly repoName: string = "twitter-api";

  constructor(private githubService: GithubService) {}

  getRepos() {
    this.githubService.getRepos(this.userName).subscribe((data: any) => {
      this.repositories = data;
      this.getTotalCommits();
      this.getStars();
    });
  }

  getRepoCommits() {
    this.githubService.getRepoCommits(this.repoName, this.userName).subscribe((data: any) => {
      this.commits = data;
    });
  }

  getStars() {
    if (this.repositories) {
      this.stargazers = []; 
      this.repositories.forEach((repo: any) => {
        this.githubService.getStars(repo.name, this.userName).subscribe((data: any) => {
          if (data) {
            this.stargazers = [...this.stargazers, ...data];
          }
        });
      });
    }
  }
  
  getTotalCommits() {
    if (this.repositories) {
      this.repositories.forEach((repo: any) => {
        this.githubService.getRepoCommits(repo.name, this.userName).subscribe((data: any) => {
          if (data) {
            this.commits = [...this.commits, ...data];
          }
        });
      });
    }
  }
  /*
  - Using the free tier github API endpoints
  - Very limited API calls 
  - As a result, the github-stats.component will not always display the stats correctly
 */
  ngOnInit() {
    this.githubService.getData(this.userName).subscribe((data: any) => {
      this.githubData = data;
      this.avatarUrl = data.avatar_url;
    });
    this.getRepos();
  }
}
