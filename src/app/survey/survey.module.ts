import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SurveyThumbnailComponent } from './survey-thumbnail-list/thumbnail/survey-thumbnail.component';
import { SurveyThumbnailListComponent } from './survey-thumbnail-list/survey-thumbnail-list.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationFormComponent } from './creation-form/creation-form.component';


@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SurveyDashboardComponent,
    SurveyThumbnailComponent,
    SurveyThumbnailListComponent,
    SurveyQuestionComponent,
    SubmissionPageComponent,
    CreationFormComponent
  ]
})
export class SurveyModule {
}
