import { Question } from './question';

export interface AnsweredQuestion {
  question: Question;
  answer: string; // TODO: consider creating an Answer class
}
