import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs!: Blog[];
  blogPath: string = "assets/blogs/test_blog.json"

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogPath);
  }

  getArticleById(id: number) {
    
  }
}
