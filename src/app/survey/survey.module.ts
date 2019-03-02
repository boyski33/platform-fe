import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { ThumbnailComponent } from './thumbnail-list/thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { QuestionControlService } from './services/question-control.service';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';
import { SurveyService } from './services/survey.service';
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
    ThumbnailComponent,
    ThumbnailListComponent,
    SurveyQuestionComponent,
    SubmissionPageComponent,
    CreationFormComponent
  ],
  providers: [
    SurveyService,
    QuestionControlService
  ]
})
export class SurveyModule {
}
