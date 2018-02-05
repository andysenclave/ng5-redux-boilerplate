import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/state';
import { ADD_REMINDER, REMOVE_REMINDER } from '../../actions/action.types';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.less']
})
export class RemindersComponent implements OnInit {
  @select() reminders;
  protected model: string = ""

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  addReminder() {
    this.ngRedux.dispatch({type: ADD_REMINDER, reminder: this.model})
  }
  removeReminder(reminder) {
    this.ngRedux.dispatch({type: REMOVE_REMINDER, reminder})
  }

}
