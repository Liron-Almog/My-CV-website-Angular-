import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
