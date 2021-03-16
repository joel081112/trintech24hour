import { Component } from '@angular/core';
import * as moment from 'moment';
import { faCoffee, faQuestion, faFilter, faQuestionCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle as farQuestionCirlce } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  faCoffee = faCoffee;
  faQuestion = faQuestion;
  faFilter = faFilter;
  faQuestionCircle = faQuestionCircle;
  faSync = faSync;
  farQuestionCirlce = farQuestionCirlce;

  getDate(){
    console.log(moment().format("MMMM Do YYYY"));
  }
}
