import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {limitIteration} from './iteration-limit';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [limitIteration],
  exports:[limitIteration]
})
export class PipesModule { }
