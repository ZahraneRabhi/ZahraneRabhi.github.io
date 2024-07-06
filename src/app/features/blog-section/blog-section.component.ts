import { Component } from '@angular/core';
import { Blog } from 'src/app/core/models/Blog';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent {
  blogs!: Blog[];
  
  constructor(private blogService: BlogService){ }

  ngOnInit(): void {
    this.blogService.getArticles().subscribe(blogs => {
      this.blogs = blogs;
      console.log(this.blogs);
    });
  }
}
