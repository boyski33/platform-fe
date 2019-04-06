import { Submission } from './submission';

export class SurveyReport {
  submissions: Submission[];
  answerStats: {[key: string]: number};
}
