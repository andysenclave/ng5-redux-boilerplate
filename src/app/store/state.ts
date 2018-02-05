export interface AppState {
  texts: string[];
  textPending: boolean;
  reminders?: string[];
}

export const INITIAL_STATE: AppState = {
  texts: [],
  textPending: false
}