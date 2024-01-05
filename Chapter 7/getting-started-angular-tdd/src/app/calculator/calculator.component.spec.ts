import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from 'src/core/services/calculator.service';
import { of } from 'rxjs';
import { ColorChangeDirective } from 'src/core/directives/color-change.directive';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent, ColorChangeDirective],
      providers: [CalculatorService],
      imports: [ReactiveFormsModule],
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

  // it('should raise an exception when dividing by zero', () => {
  //   spyOn(calculatorService, 'divide').and.callThrough();
  //   calculator.divide(10, 0);
  //   expect(() => {
  //     calculatorService.divide(10, 0);
  //   }).toThrowError('Cannot divide by zero');
  // });

  it('should be valid when all of the fields are filled in correctly', () => {
    calculator.calculatorForm.get('operand1')?.setValue(123);
    calculator.calculatorForm.get('operand2')?.setValue(456);
    calculator.calculatorForm.get('operator')?.setValue('+');

    expect(calculator.calculatorForm.valid).toBe(true);
  });

  it('should be invalid when one of the field is not filled in correctly', () => {
    calculator.calculatorForm.get('operand1')?.setValue(123);
    calculator.calculatorForm.get('operator')?.setValue('+');

    expect(calculator.calculatorForm.valid).toBe(false);
  });

  it('should add when the + operator is selected and the calculate button is clicked', () => {
    calculator.calculatorForm.get('operand1')?.setValue(2);
    calculator.calculatorForm.get('operand2')?.setValue(3);
    calculator.calculatorForm.get('operator')?.setValue('+');
    calculator.calculate();
    expect(calculator.result).toBe(5);
  });

  it('should subtract when the - operator is selected and the calculate button is clicked', () => {
    calculator.calculatorForm.get('operand1')?.setValue(2);
    calculator.calculatorForm.get('operand2')?.setValue(3);
    calculator.calculatorForm.get('operator')?.setValue('-');
    calculator.calculate();
    expect(calculator.result).toBe(-1);
  });

  it('should multiply when the * operator is selected and the calculate button is clicked', () => {
    calculator.calculatorForm.get('operand1')?.setValue(2);
    calculator.calculatorForm.get('operand2')?.setValue(3);
    calculator.calculatorForm.get('operator')?.setValue('*');
    calculator.calculate();
    expect(calculator.result).toBe(6);
  });

  it('should divide when the / operator is selected and the calculation button is clicked.', () => {
    calculator.calculatorForm.get('operand1')?.setValue(3);
    calculator.calculatorForm.get('operand2')?.setValue(2);
    calculator.calculatorForm.get('operator')?.setValue('/');
    calculator.calculate();
    expect(calculator.result).toBe(1.5);
  });
});
