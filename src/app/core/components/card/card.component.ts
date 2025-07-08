import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/Project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() project?: Project;
  @Output() projectClick = new EventEmitter<string>();

  constructor(private router: Router) {}

  viewProjectDetails() {
    if (this.project?.id) {
      this.router.navigate(['/project', this.project.id]);
    }
  }

  redirectToProject() {
    if (this.project?.link) {
      window.location.href = this.project.link;
    } else {
      console.error('Project link is not defined');
    }
  }
}
