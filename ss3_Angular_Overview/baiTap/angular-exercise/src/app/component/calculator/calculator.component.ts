import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(first, second) {
    this.result = +first + +second;
    return this.result;
  }

  sub(first, second) {
    this.result = +first - +second;
    return this.result;
  }

  multi(first, second) {
    this.result = +first * +second;
    return this.result;
  }

  div(first, second) {
    // tslint:disable-next-line:triple-equals
    if (first == '0') {
    this.result = null;
    } else {
      this.result = +first / +second;
      return this.result;
    }
  }

}
