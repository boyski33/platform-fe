import { User } from '../../user/model/user';
import { Survey } from './survey';
import { AnsweredQuestion } from './answered-question';

export class Submission {
  _id: string;
  timestamp: number;
  user: User;
  survey: Survey;
  answers: AnsweredQuestion[];

  constructor(user, survey, answers: AnsweredQuestion[]) {
    this.user = user;
    this.survey = survey;
    this.answers = answers;
  }
}
