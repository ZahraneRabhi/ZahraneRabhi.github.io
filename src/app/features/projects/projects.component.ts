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

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  navigateToProjectDetails(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }
}
