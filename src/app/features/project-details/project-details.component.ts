import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectService } from '../../core/services/project.service';

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
    private projectService: ProjectService
  ) {}

  get hasScreenshots(): boolean {
    return !!this.project?.screenshots?.length;
  }

  get hasMultipleScreenshots(): boolean {
    return (this.project?.screenshots?.length ?? 0) > 1;
  }

  get currentScreenshot(): string | undefined {
    return this.project?.screenshots?.[this.activeScreenshotIndex];
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(
        (project) => {
          if (project) {
            this.project = project;
            this.loading = false;
          } else {
            this.error = true;
            this.loading = false;
          }
        },
        () => {
          this.error = true;
          this.loading = false;
        }
      );
    } else {
      this.error = true;
      this.loading = false;
    }
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

  goToPreviousScreenshot(): void {
    if (this.project && this.activeScreenshotIndex > 0) {
      this.activeScreenshotIndex--;
    }
  }

  goToNextScreenshot(): void {
    if (
      this.project &&
      this.project.screenshots &&
      this.activeScreenshotIndex < this.project.screenshots.length - 1
    ) {
      this.activeScreenshotIndex++;
    }
  }
}
