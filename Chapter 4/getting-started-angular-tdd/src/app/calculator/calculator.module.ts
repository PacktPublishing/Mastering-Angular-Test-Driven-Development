import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { ColorChangeDirective } from 'src/core/directives/color-change.directive';


@NgModule({
  declarations: [
    CalculatorComponent,
    ColorChangeDirective
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
