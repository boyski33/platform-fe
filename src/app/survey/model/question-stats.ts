import { Question } from './question';

export class QuestionStats {
  question: Question;
  answerCount: { [key: string]: number };
}
