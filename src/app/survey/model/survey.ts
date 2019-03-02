import { Question } from './question';

export interface Survey {
  _id: string;
  title: string;
  description: string;
  creatorId: string;
  questions: Question[];
}
