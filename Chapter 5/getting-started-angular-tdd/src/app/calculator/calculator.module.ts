import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { ColorChangeDirective } from 'src/core/directives/color-change.directive';
import { PercentPipe } from 'src/core/pipes/percent.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculatorComponent,
    ColorChangeDirective,
    PercentPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
