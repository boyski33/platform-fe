import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { ThumbnailComponent } from './thumbnail-list/thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SurveyDashboardComponent,
    ThumbnailComponent,
    ThumbnailListComponent,
    SurveyQuestionComponent,
    SubmissionPageComponent,
    CreationFormComponent,
    AdminPanelComponent
  ]
})
export class SurveyModule {
}
