import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() project?: Project;

  redirectToProject() {
    if (this.project?.link) {
      window.location.href = this.project.link;
    } else {
      console.error('Project link is not defined');
    }
  }
}
