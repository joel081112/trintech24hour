import { Component, OnInit } from '@angular/core';
import { faCoffee, faQuestion, faFilter, faQuestionCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle as farQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matchrule',
  templateUrl: './matchrule.component.html',
  styleUrls: ['./matchrule.component.scss'],
})
export class MatchruleComponent implements OnInit {

  trintechimage:string = "assets/images/trintech-cadency.png";
  faCoffee = faCoffee;
  faQuestion = faQuestion;
  faFilter = faFilter;
  faQuestionCircle = faQuestionCircle;
  faSync = faSync;
  farQuestionCircle = farQuestionCircle;

  constructor(
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
