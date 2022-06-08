import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
