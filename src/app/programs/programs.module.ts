import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PorgramsComponent} from './porgrams.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProgramsService} from './programs.service';
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
  declarations: [PorgramsComponent, MakkahComponent, MaddinahComponent],
  providers: [ProgramsService],
  exports: [PorgramsComponent]
})
export class ProgramsModule {
}
