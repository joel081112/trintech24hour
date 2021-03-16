import { Component, OnInit } from '@angular/core';
import { faCoffee, faQuestion, faFilter, faQuestionCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle as farQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  trintechimage:string = "assets/images/trintech-cadency.png";
  faCoffee = faCoffee;
  faQuestion = faQuestion;
  faFilter = faFilter;
  faQuestionCircle = faQuestionCircle;
  faSync = faSync;
  farQuestionCircle = farQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
