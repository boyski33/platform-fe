import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyThumbnailListComponent } from './survey-thumbnail-list/survey-thumbnail-list.component';
import { SubmissionThumbnailListComponent } from './submission-thumbnail-list/submission-thumbnail-list.component';
import { SubmissionModalComponent } from './submission-modal/submission-modal.component';
import { SubmissionAnswerComponent } from './submission-answer/submission-answer.component';

@NgModule({
  declarations: [
    SurveyThumbnailListComponent,
    SubmissionThumbnailListComponent,
    SubmissionModalComponent,
    SubmissionAnswerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SurveyThumbnailListComponent,
    SubmissionThumbnailListComponent
  ]
})
export class SharedModule { }
