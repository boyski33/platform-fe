import { Submission } from './submission';
import { QuestionStats } from './question-stats';

export class SurveyReport {
  submissions: Submission[];
  surveyStats: QuestionStats[];
}
