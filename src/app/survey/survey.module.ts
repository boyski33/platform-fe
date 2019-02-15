import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ThumbnailComponent } from './thumbnail-list/thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { QuestionControlService } from './services/question-control.service';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SubmissionPageComponent } from './submission-page/submission-page.component';
import { QuestionService } from './services/question.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SurveyDashboardComponent,
    SurveyFormComponent,
    ThumbnailComponent,
    ThumbnailListComponent,
    SurveyQuestionComponent,
    SubmissionPageComponent
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ]
})
export class SurveyModule {
}
