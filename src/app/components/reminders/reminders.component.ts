import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../../store/state';
import { ADD_REMINDER, REMOVE_REMINDER } from '../../actions/action.types';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.less']
})
export class RemindersComponent implements OnInit {
  @select() reminders;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }
  addReminder() {
    this.ngRedux.dispatch({type: ADD_REMINDER})
  }
  removeReminder() {
    this.ngRedux.dispatch({type: REMOVE_REMINDER})
  }

}
