import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private resultSubject = new BehaviorSubject<number>(0);
  public result$ = this.resultSubject.asObservable();

  constructor() { }

  add(a: number, b: number): number {
    return a + b;
  }

  substract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}
