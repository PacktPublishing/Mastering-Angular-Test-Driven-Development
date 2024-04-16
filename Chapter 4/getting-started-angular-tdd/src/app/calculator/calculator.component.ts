import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/core/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  result!: number | string;
  color = 'red';

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.result = 0;
  }

  add(a: number, b: number): void {
    this.result = this.calculatorService.add(a, b);
  }

  substract(a: number, b: number): void {
    this.result = this.calculatorService.substract(a, b);
  }

  multiply(a: number, b: number): void {
    this.result = this.calculatorService.multiply(a, b);
  }

  divide(a: number, b: number): void {
    this.result = this.calculatorService.divide(a, b);
  }


}
