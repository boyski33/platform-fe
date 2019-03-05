import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveyModule } from '../survey/survey.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SubmissionThumbnailListComponent } from './submission-thumbnail-list/submission-thumbnail-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminDashboardComponent,
    SubmissionThumbnailListComponent
  ]
})
export class AdminModule {
}
