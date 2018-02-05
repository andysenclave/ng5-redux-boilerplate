import { IAppState } from '../store/state';
import { ADD_REMINDER, REMOVE_REMINDER } from '../actions/action.types'

export function rootReducer(state: IAppState, action): IAppState {
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