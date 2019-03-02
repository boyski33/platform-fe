import { User } from '../../user/model/user';
import { Survey } from './survey';
import { AnsweredQuestion } from './answered-question';

export interface Submission {
  _id: string;
  timestamp: number;
  user: User;
  survey: Survey;
  answers: AnsweredQuestion[];
}
