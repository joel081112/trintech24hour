import { Component, OnInit } from '@angular/core';
import { CounterService} from '../counter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor(private counterService: CounterService,
    private route: ActivatedRoute) { }

  /**
   * initliase page
   */
  ngOnInit(): void {
    this.count = this.counterService.getNumber();
  }

  buttonClicked(){
    this.counterService.incrementNumber();
    this.count = this.counterService.getNumber();
  }

}
