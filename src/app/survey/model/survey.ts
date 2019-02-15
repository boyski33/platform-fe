import { User } from '../../model/user';
import { SurveyQuestion } from './survey-question';

export interface Survey {
  id: string;
  title: string;
  description: string;
  creator: User;
  questionSet: SurveyQuestion[];
}
