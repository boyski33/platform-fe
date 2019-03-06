import { Question } from './question';
import { User } from '../../user/model/user';

export class Survey {
  _id: string;
  title: string;
  description: string;
  createdBy: User;
  questions: Question[];

  constructor() {}
}
