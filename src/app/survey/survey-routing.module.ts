import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';

const routes: Routes = [
  { path: 'dashboard', component: SurveyDashboardComponent },
  { path: 'new', component: SurveyFormComponent },
  { path: ':id', component: SubmissionPageComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
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
