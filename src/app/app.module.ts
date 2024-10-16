import {ElementRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProjectsComponent } from './projects/projects.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";
import {MasterComponent} from "./master/master.component";
import {BachelorComponent} from "./bachelor/bachelor.component";
import {ExperienceComponent} from "./experience/experience.component";
import {EducationComponent} from "./education/education.component";

const appRoute: Routes = [
  /*{path: '', component: HomeComponent},*/
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'cv', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }, /* always last */
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    SkillsetComponent,
    ProjectsComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    FormsModule,
    FooterComponent,
    MasterComponent,
    BachelorComponent,
    ExperienceComponent,
    EducationComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
