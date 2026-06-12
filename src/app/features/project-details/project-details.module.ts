import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { MatrixRainComponent } from '../../core/components/matrix-rain/matrix-rain.component';

const routes: Routes = [
  { path: '', component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatrixRainComponent
  ]
})
export class ProjectDetailsModule { }
