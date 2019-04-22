import { User } from '../../user/model/user';
import { Survey } from './survey';
import { AnsweredQuestion } from './answered-question';

export class Submission {
  id: string;
  timestamp: string;
  user: User;
  survey: Survey;
  answers: AnsweredQuestion[];
  isPredicted: boolean;

  constructor(user, survey, answers: AnsweredQuestion[]) {
    this.user = user;
    this.survey = survey;
    this.answers = answers;
  }
}
