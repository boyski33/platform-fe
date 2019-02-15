import { User } from '../../model/user';
import { Question } from './question';

export interface Survey {
  id: string;
  title: string;
  description: string;
  creator: User;
  questionSetId: string;
}
