import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Store, createStore } from 'redux';

import { AppRoutingModule } from './app-routing.module';
import { IAppState, INITIAL_STATE } from './store/state';
import { remindersReducer } from './reducers/reminders.reducer'
import { rootReducer } from './reducers/root.reducer'
import { AppComponent } from './app.component';
import { RemindersComponent } from './components/reminders/reminders.component';


@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (private ngRedux: NgRedux<IAppState>) {
    console.log(typeof rootReducer)
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
