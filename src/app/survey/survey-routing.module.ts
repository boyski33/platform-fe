import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: SurveyFormComponent },
  { path: ':id', component: SubmissionPageComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class SurveyRoutingModule {
}
