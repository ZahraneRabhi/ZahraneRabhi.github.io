import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() project?: Project;
}
