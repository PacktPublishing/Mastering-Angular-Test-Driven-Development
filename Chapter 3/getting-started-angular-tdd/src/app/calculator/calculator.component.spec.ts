import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from 'src/core/services/calculator.service';
import { of } from 'rxjs';
import { ColorChangeDirective } from 'src/core/directives/color-change.directive';

describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent, ColorChangeDirective],
      providers: [CalculatorService]
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
});
