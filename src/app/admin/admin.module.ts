import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SurveyReportComponent } from './survey-report/survey-report.component';
import { SharedModule } from '../shared/shared.module';
import { SurveyStatsComponent } from './survey-stats/survey-stats.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AnswerListComponent } from './answer-list/answer-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgxChartsModule
  ],
  declarations: [
    AdminDashboardComponent,
    SurveyReportComponent,
    SurveyStatsComponent,
    PieChartComponent,
    BarChartComponent,
    AnswerListComponent
  ]
})
export class AdminModule {
}
