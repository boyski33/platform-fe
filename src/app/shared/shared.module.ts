import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyThumbnailListComponent } from './survey-thumbnail-list/survey-thumbnail-list.component';
import { SubmissionThumbnailListComponent } from './submission-thumbnail-list/submission-thumbnail-list.component';
import { SubmissionModalComponent } from './submission-modal/submission-modal.component';
import { SubmissionAnswerComponent } from './submission-answer/submission-answer.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgePipe } from './user-icon/age.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    SurveyThumbnailListComponent,
    SubmissionThumbnailListComponent,
    SubmissionModalComponent,
    SubmissionAnswerComponent,
    UserIconComponent,
    AgePipe
  ],
  exports: [
    SurveyThumbnailListComponent,
    SubmissionThumbnailListComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
