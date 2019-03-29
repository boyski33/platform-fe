import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SurveyDashboardComponent
  },
  {
    path: 'new',
    component: CreationFormComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: ':id',
    component: SubmissionFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
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
