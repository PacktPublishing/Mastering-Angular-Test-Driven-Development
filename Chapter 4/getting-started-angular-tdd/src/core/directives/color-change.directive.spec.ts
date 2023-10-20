import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorChangeDirective } from './color-change.directive';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';

describe('ColorChangeDirective', () => {
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculator: CalculatorComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorChangeDirective, CalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    calculator = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should apply the specified color', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement;
    const color: string = 'red';
    calculator.color = color;
    fixture.detectChanges();

    expect(element.style.color).toBe(color);
  });
});
