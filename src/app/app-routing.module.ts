import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { BlogContentComponent } from './features/blog-content/blog-content.component';

const routes: Routes = [
  { path: 'blog/:id', component: BlogContentComponent },
  { path: '', component: LayoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
