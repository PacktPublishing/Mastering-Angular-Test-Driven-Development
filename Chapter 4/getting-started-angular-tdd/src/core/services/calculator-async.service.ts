import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculatorAsyncService {
  constructor() {}

  add(a: number, b: number): Observable<number> {
    return of(a + b);
  }

  subtract(a: number, b: number): Observable<number> {
    return of(a - b);
  }

  multiply(a: number, b: number): Observable<number> {
    return of(a * b);
  }

  divide(a: number, b: number): Observable<number> {
    if (b === 0) {
      return throwError(() => new Error('Cannot divide by zero'));
    }
    return of(a / b).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
