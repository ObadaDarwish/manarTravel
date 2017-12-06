import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingIndicatorModule} from '../loading-indicator/loading-indicator.module';
import {ManarProgramComponent} from './manar-program.component';
@NgModule({
  imports: [
    LoadingIndicatorModule,
    CommonModule
  ],
  declarations: [ManarProgramComponent]
})
export class ManarProgramModule { }
