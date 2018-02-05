import { Reminders } from './reminders.model';

export interface IAppState {
  texts: string[];
  textPending: boolean;
  reminders?: Reminders[];
}

export const INITIAL_STATE: IAppState = {
  texts: [],
  textPending: false
}