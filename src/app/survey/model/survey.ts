import { Question } from './question';

export class Survey {
  id: string;
  ownerEmail: string;
  title: string;
  description: string;
  timestamp: string;
  questions: Question[];

  constructor() {}
}
