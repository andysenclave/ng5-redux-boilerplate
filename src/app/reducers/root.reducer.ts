import { IAppState, INITIAL_STATE } from '../store/state';
import { combineReducers } from 'redux';

import { remindersReducer } from './reminders.reducer';

export const rootReducer = combineReducers({
  texts: (s: IAppState = INITIAL_STATE, a) => {
    return s.texts
  },
  textPending: (s: IAppState = INITIAL_STATE, a) => {return s.textPending},
  reminders: remindersReducer
})