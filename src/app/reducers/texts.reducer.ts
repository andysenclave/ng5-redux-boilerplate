import { IAppState, INITIAL_STATE } from '../store/state';
import { ADD_REMINDER, REMOVE_REMINDER } from '../actions/action.types'
import { Reminders } from '../store/reminders.model';

const INITIAL_REMINDERS = []
const INITIAL_STATE_WITH_REMINDERS = Object.assign({}, INITIAL_STATE, {
  ...INITIAL_STATE,
  reminders: INITIAL_REMINDERS
});

export function remindersReducer(
  state: IAppState = INITIAL_STATE_WITH_REMINDERS, 
  action): IAppState {
    switch (action.type) {
      case ADD_REMINDER:
        return Object.assign({}, state, {
          texts: state.texts,
          textPending: state.textPending,
          reminders: [...state.reminders || [], action.reminder]
        });
      case REMOVE_REMINDER:
        const reminders = state.reminders
        const reminderIndex = state.reminders.indexOf(action.reminder)
        const updatedReminders = [state.reminders.slice(0, reminderIndex), state.reminders.slice(reminderIndex + 1)]
        return Object.assign(
          {}, state, {
            texts: state.texts,
            textPending: state.textPending,
            reminders: updatedReminders
          });
      default: 
        return state
    }
}