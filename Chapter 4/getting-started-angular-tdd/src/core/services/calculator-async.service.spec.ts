import { TestBed, fakeAsync } from '@angular/core/testing';

import { CalculatorAsyncService } from './calculator-async.service';

describe('CalculatorAsyncService', () => {
  let service: CalculatorAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', fakeAsync(() => {
    let result = 0;
    service.add(1, 2).subscribe((val: number) => {
      result = val;
    });

    expect(result).toBe(3);
  }));

  it('should subtract two numbers', fakeAsync(() => {
    let result = 0;
    service.subtract(5, 3).subscribe((val: number) => {
      result = val;
    });

    expect(result).toBe(2);
  }));

  it('should multiply two numbers', fakeAsync(() => {
    let result = 0;
    service.multiply(3, 4).subscribe((val: number) => {
      result = val;
    });

    expect(result).toBe(12);
  }));

  it('should divide two numbers', fakeAsync(() => {
    let result = 0;
    service.divide(10, 2).subscribe((val: number) => {
      result = val;
    });

    expect(result).toBe(5);
  }));

  it('should throw an error when dividing by zero', fakeAsync(() => {
    let error = { message: '' };
    service.divide(10, 0).subscribe({
      error: (err) => (error = err),
    });
    expect(error).toBeTruthy();
    expect(error.message).toBe('Cannot divide by zero');
  }));
});
