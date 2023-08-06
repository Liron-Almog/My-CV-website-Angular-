import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { ContactComponent } from './contact/contact.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectsListComponent } from './my-projects/projects-list/projects-list.component';
import { ProjectItemComponent } from './my-projects/project-item/project-item.component';
import { ProjectsExplanationListComponent } from './my-projects/projects-explanation-list/projects-explanation-list.component';
import { ExplanationItemComponent } from './my-projects/explanation-item/explanation-item.component';


const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'projects', component:MyProjectsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    NavBarComponent,
    HomeMainComponent,
    HomeFooterComponent,
    CvContentComponent,
    ContactComponent,
    ContactMainComponent,
    MyProjectsComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectsExplanationListComponent,
    ExplanationItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
