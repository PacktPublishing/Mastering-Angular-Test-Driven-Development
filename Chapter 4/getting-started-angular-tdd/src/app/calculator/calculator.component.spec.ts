import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from 'src/core/services/calculator.service';
import { ColorChangeDirective } from 'src/core/directives/color-change.directive';
import { CalculatorServiceStub } from 'src/core/stubs/calculator.service.stub';
// import { MockSquareRootService } from 'src/core/mocks/mock-square-root.service.mock';

describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent, ColorChangeDirective],
      providers: [
        { provide: CalculatorService, useClass: CalculatorServiceStub },
        // { provide: CalculatorService, useClass: MockSquareRootService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    calculator = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(calculator).toBeTruthy();
  });

  // it('should subscribe to result changes from the calculator service', () => {
  //   const mockResult = 10;
  //  // spyOn(calculatorService.result$, 'subscribe').and.returnValue(of(mockResult));

  //   calculator.ngOnInit();

  //   expect(calculator.result).toEqual(mockResult);
  //   expect(calculatorService.result$.subscribe).toHaveBeenCalled();
  // });

  it('should initialize result to 0', () => {
    calculator.ngOnInit();
    expect(calculator.result).toEqual(0);
  });

  it('should add two numbers correctly', () => {
    spyOn(calculatorService, 'add').and.callThrough();
    calculator.add(2, 3);
    expect(calculatorService.add).toHaveBeenCalledWith(2, 3);
    expect(calculator.result).toBe(5);
  });

  it('should substract two numbers correctly', () => {
    spyOn(calculatorService, 'substract').and.callThrough();
    calculator.substract(2, 3);
    expect(calculatorService.substract).toHaveBeenCalledWith(2, 3);
    expect(calculator.result).toBe(-1);
  });

  it('should multiply two numbers correctly', () => {
    spyOn(calculatorService, 'multiply').and.callThrough();
    calculator.multiply(2, 3);
    expect(calculatorService.multiply).toHaveBeenCalledWith(2, 3);
    expect(calculator.result).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    spyOn(calculatorService, 'divide').and.callThrough();
    calculator.divide(4, 2);
    expect(calculatorService.divide).toHaveBeenCalledWith(4, 2);
    expect(calculator.result).toBe(2);
  });

  it('should raise an exception when dividing by zero', () => {
    spyOn(calculatorService, 'divide').and.callThrough();
    expect(() => calculator.divide(10, 0)).toThrowError(
      'Cannot divide by zero'
    );
    expect(calculatorService.divide).toHaveBeenCalledWith(10, 0);
  });

  // it('should display error message for division by zero', () => {
  //   spyOn(calculatorService, 'divide').and.callThrough();
  //   calculator.divide(10, 0);
  //   expect(calculatorService.divide).toHaveBeenCalledWith(10, 0);
  //   expect(calculator.result).toBe('Division by zero');
  // });

  // it('should calculate the square root correctly', () => {
  //   spyOn(calculatorService, ‘squareRoot’).and.callThrough();
  //   calculator.squareRoot(16);
  //   expect(calculatorService.squareRoot).toHaveBeenCalledWith(16);
  //   expect(calculator.result).toBe(4);
  //  });
});
