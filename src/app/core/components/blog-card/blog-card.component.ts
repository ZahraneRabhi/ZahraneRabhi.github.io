import { Component, Input } from '@angular/core';
import { Blog } from '../../models/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() blog!: Blog;

  constructor(private router: Router) {}
  
  redirectToBlog(id: number) {
    this.router.navigate(['/blog', id]);
  }
}
