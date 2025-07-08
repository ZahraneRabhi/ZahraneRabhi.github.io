import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ContentComponent } from './features/content/content.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { CardComponent } from './core/components/card/card.component';
import { GithubStatsComponent } from './features/github-stats/github-stats.component';
import { ContactComponent } from './features/contact/contact.component';
import { MatrixRainComponent } from './core/components/matrix-rain/matrix-rain.component';
import { ModalComponentComponent } from './core/components/modal-component/modal-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './features/about/about.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ProjectDetailsComponent } from './features/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LayoutComponent,
    ProjectsComponent,
    CardComponent,
    GithubStatsComponent,
    ContactComponent,
    MatrixRainComponent,
    ModalComponentComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
