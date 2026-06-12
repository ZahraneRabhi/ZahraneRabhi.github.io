import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../core/services/project.service';
import { GitHubStats, GithubService } from '../../core/services/github.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-vintage',
  templateUrl: './vintage.component.html',
  styleUrls: ['./vintage.component.css']
})
export class VintageComponent implements OnInit {
  projects: Project[] = [];
  stats: GitHubStats | null = null;
  readonly today = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  constructor(
    private projectService: ProjectService,
    private githubService: GithubService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(p => (this.projects = p));
    this.githubService.getStats('ZahraneRabhi').subscribe(s => (this.stats = s));
  }

  stackLabels(project: Project): string {
    return project.stack.map(s => s.label).join(', ');
  }

  enterTheMatrix(): void {
    this.themeService.set('matrix');
    window.scrollTo(0, 0);
  }
}
