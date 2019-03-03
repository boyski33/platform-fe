import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: 'dashboard', component: SurveyDashboardComponent },
  { path: 'new', component: CreationFormComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: ':id', component: SubmissionPageComponent },
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
