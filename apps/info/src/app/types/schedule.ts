import { Kind } from './kind';

export interface Schedule {
  id: string;
  speaker: string;
  photo: string;
  role: string;
  title: string;
  description: string;
  duration: number;
  start: Date;
  kind: Kind;
}
