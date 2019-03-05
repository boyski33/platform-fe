import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyThumbnailListComponent } from './survey-thumbnail-list/survey-thumbnail-list.component';
import { SubmissionThumbnailListComponent } from './submission-thumbnail-list/submission-thumbnail-list.component';

@NgModule({
  declarations: [
    SurveyThumbnailListComponent,
    SubmissionThumbnailListComponent
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
