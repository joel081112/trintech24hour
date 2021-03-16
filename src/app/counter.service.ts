import { Injectable } from '@angular/core';

/**
 * Theyre classes that contain function in many different components
 */

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  private counter: number=0;

  constructor() { }

  getNumber(): number {
    return this.counter;
  }

  incrementNumber(){
    this.counter++;
  }

}
