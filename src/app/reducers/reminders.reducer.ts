import { IAppState, INITIAL_STATE } from '../store/state';
import { ADD_REMINDER, REMOVE_REMINDER } from '../actions/action.types'
import { Reminders } from '../store/reminders.model';

const INITIAL_REMINDERS = []
const INITIAL_STATE_WITH_REMINDERS: IAppState = Object.assign({}, 
  INITIAL_STATE, {
    ...INITIAL_STATE,
    reminders: INITIAL_REMINDERS
  });

export function remindersReducer(
  state: IAppState = INITIAL_STATE_WITH_REMINDERS, 
  action): Array<Reminders> {
    switch (action.type) {
      case ADD_REMINDER:
        return state.reminders.concat(action.reminder)
      case REMOVE_REMINDER:
        const reminders = state.reminders
        const reminderIndex = state.reminders.indexOf(action.reminder)
        return [ ...state.reminders.slice(0, reminderIndex), ...state.reminders.slice(reminderIndex + 1)];
      default: 
        return INITIAL_REMINDERS
    }
}