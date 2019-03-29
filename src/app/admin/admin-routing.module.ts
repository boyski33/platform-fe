import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveyReportComponent } from './survey-report/survey-report.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'reports',
    component: AdminDashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'reports/:surveyId',
    component: SurveyReportComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reports'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {
}
