import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {customPorgramsComponent} from './custom-programs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {customProgramsService} from './custom-programs.service';
import {MakkahComponent} from './makkah/makkah.component';
import {MaddinahComponent} from './madinah/maddinah.component';
import {RouterModule} from '@angular/router';
import {RatingModule,ButtonsModule ,ModalModule,BsDatepickerModule} from 'ngx-bootstrap';
import {MatRadioModule, MatSlideToggleModule,MatDialogModule} from '@angular/material';
import {LoadingIndicatorModule} from '../loading-indicator/loading-indicator.module';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
  imports: [
    MatDialogModule,
    PipesModule,
    LoadingIndicatorModule,
    ButtonsModule,
    BsDatepickerModule.forRoot()  ,
    MatSlideToggleModule,
    MatRadioModule,
    CommonModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
    RatingModule.forRoot()
  ],
  declarations: [customPorgramsComponent, MakkahComponent, MaddinahComponent],
  providers: [customProgramsService],
  exports: [customPorgramsComponent]
})
export class customProgramsModule {
}
