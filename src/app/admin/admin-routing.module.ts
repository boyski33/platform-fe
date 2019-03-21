import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveyReportComponent } from './survey-report/survey-report.component';

const routes: Routes = [
  // {
  //   path: 'reports',
  //   component: AdminDashboardComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       component: SurveyReportComponent
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'reports'
  // }

  {
    path: 'reports',
    component: AdminDashboardComponent
  },
  {
    path: 'reports/:surveyId',
    component: SurveyReportComponent
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
