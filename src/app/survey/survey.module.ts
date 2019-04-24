import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { SharedModule } from '../shared/shared.module';
import { MultipleChoiceQuestionComponent } from './question-forms/multiple-choice-question/multiple-choice-question.component';
import { FreeResponseQuestionComponent } from './question-forms/free-response-question/free-response-question.component';
import { YesnoQuestionComponent } from './question-forms/yesno-question/yesno-question.component';
import { RangeQuestionComponent } from './question-forms/range-question/range-question.component';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    SurveyDashboardComponent,
    SurveyQuestionComponent,
    SubmissionFormComponent,
    CreationFormComponent,
    MultipleChoiceQuestionComponent,
    FreeResponseQuestionComponent,
    YesnoQuestionComponent,
    RangeQuestionComponent,
  ]
})
export class SurveyModule {
}
