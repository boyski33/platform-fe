import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { SharedModule } from '../shared/shared.module';
import { DropdownQuestionFormComponent } from './question-forms/dropdown-question-form/dropdown-question-form.component';
import { TextboxQuestionFormComponent } from './question-forms/textbox-question-form/textbox-question-form.component';

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
    DropdownQuestionFormComponent,
    TextboxQuestionFormComponent
  ]
})
export class SurveyModule {
}
