import { Question } from './question';
import { User } from '../../user/model/user';

export class Survey {
  id: string;
  title: string;
  description: string;
  owner: User;
  timestamp: string;
  questions: Question[];

  constructor() {}
}
