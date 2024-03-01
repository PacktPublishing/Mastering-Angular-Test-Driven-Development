import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from 'src/core/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  result!: number;
  color = 'red';
  calculatorForm!: FormGroup;

  constructor(private calculatorService: CalculatorService) {
    this.calculatorForm = new FormGroup({
      operand1: new FormControl(null, [Validators.required]),
      operand2: new FormControl(null, [Validators.required]),
      operator: new FormControl(null, [Validators.required]),
    });
  }

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

  calculate(): void {
    if (this.calculatorForm.get('operator')?.value === '+') {
      this.add(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }

    if (this.calculatorForm.get('operator')?.value === '-') {
      this.substract(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }

    if (this.calculatorForm.get('operator')?.value === '*') {
      this.multiply(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }

    if (this.calculatorForm.get('operator')?.value === '/') {
      this.divide(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }
  }
}
