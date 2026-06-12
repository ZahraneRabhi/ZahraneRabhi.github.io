import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  activeFilter = 'All';
  filters = ['All', 'Frontend', 'Backend', 'Full-stack', 'AI/ML', 'Tools'];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') return this.projects;
    if (this.activeFilter === 'AI/ML') {
      return this.projects.filter(p =>
        p.category?.some(c =>
          ['Deep Learning', 'Data Mining', 'Data Analytics', 'AI/ML', 'NLP', 'Generative AI'].includes(c)
        )
      );
    }
    if (this.activeFilter === 'Tools') {
      return this.projects.filter(p =>
        p.category?.some(c => ['Tools', 'Component'].includes(c))
      );
    }
    return this.projects.filter(p => p.category?.includes(this.activeFilter));
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  navigateToProjectDetails(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }
}
