import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PorgramsComponent} from './porgrams.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';
import {ProgramsService} from './programs.service';
import { ContentComponent } from './content/content.component';
import { IncludesComponent } from './includes/includes.component';
import { RouterModule } from '@angular/router';
import {GlobalServiceService} from '../global-service.service';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  declarations: [PorgramsComponent, ContentComponent, IncludesComponent],
  providers:[ProgramsService,GlobalServiceService],
  exports:[PorgramsComponent]
})
export class ProgramsModule { }
