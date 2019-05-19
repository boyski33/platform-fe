import { Component, Input, OnInit } from '@angular/core';
import { Submission } from '../../survey/model/submission';
import { User } from '../../user/model/user';
import { AnsweredQuestion } from '../../survey/model/answered-question';

@Component({
  selector: 'submission-thumbnail-list',
  templateUrl: './submission-thumbnail-list.component.html',
  styleUrls: [ './submission-thumbnail-list.component.scss' ]
})
export class SubmissionThumbnailListComponent implements OnInit {

  @Input() submissions: Submission[];
  @Input() buttonText: string;
  @Input() isReport = true;

  filterText: string;
  visibleSubmissions: Submission[];

  constructor() {
  }

  ngOnInit() {
    this.visibleSubmissions = this.submissions.slice(0);
  }

  filterSubmissions(text: string) {
    text = text.toLowerCase();

    this.visibleSubmissions = this.submissions.filter(sub => {
      if (text.trim().length < 1) {
        return true;
      }
      return this.filterUser(sub.user, text) || this.filterAnswers(sub.answers, text);
    });
  }

  private filterUser(user: User, text: string): boolean {
    if (!user) {
      return false;
    }

    return user.gender.startsWith(text)
      || (user.firstName && user.firstName.toLowerCase().startsWith(text))
      || (user.lastName && user.lastName.toLowerCase().startsWith(text));
  }

  private filterAnswers(answers: AnsweredQuestion[], text: string): boolean {
    for (const ans of answers) {
      if (ans.answer.toLowerCase().startsWith(text)) {
        return true;
      }
    }
  }

}
