import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';


const appRoute: Routes = [
  /*{path: '', component: HomeComponent},*/
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent } /* always last */
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    SkillsetComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorComponent
  ],
    imports: [
        BrowserModule,
      RouterModule.forRoot(appRoute)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
