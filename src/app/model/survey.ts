import { User } from './user';

export interface Survey {
  title: string;
  description: string;
  creator: User;
}
