import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectService } from '../../core/services/project.service';
import { SiteTheme, ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  activeScreenshotIndex = 0;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private themeService: ThemeService
  ) {}

  readonly theme$ = this.themeService.theme$;

  setTheme(theme: SiteTheme): void {
    this.themeService.set(theme);
    window.scrollTo(0, 0);
  }

  get stackLabels(): string {
    return this.project?.stack.map(s => s.label).join(', ') ?? '';
  }

  get categoryLabels(): string {
    return this.project?.category.join(', ') ?? '';
  }

  get screenshots(): string[] {
    return this.project?.screenshots ?? [];
  }

  get hasScreenshots(): boolean {
    return this.screenshots.length > 0;
  }

  get hasMultipleScreenshots(): boolean {
    return this.screenshots.length > 1;
  }

  get currentScreenshot(): string | undefined {
    return this.screenshots[this.activeScreenshotIndex];
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      this.error = true;
      this.loading = false;
      return;
    }
    this.projectService.getProjectById(projectId).subscribe({
      next: (project) => {
        this.project = project;
        this.error = !project;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.hasMultipleScreenshots) return;
    if (event.key === 'ArrowLeft') this.goToPreviousScreenshot();
    if (event.key === 'ArrowRight') this.goToNextScreenshot();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  selectScreenshot(index: number): void {
    this.activeScreenshotIndex = index;
  }

  goToPreviousScreenshot(): void {
    const len = this.screenshots.length;
    if (len) this.activeScreenshotIndex = (this.activeScreenshotIndex - 1 + len) % len;
  }

  goToNextScreenshot(): void {
    const len = this.screenshots.length;
    if (len) this.activeScreenshotIndex = (this.activeScreenshotIndex + 1) % len;
  }
}
