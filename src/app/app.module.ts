import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MissingComponent } from './missing/missing.component';
import {RoutingModule} from  './app.routes';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {PageScrollService}  from 'ng2-page-scroll';
import {ProgramsModule} from './programs/programs.module';
import { RouterModule } from '@angular/router';
import {GlobalService} from './global-service.service';
import {ProgramsService} from './programs/programs.service';
import { GlobalModalComponent } from './global-modal/global-modal.component';
import { ButtonsModule,ModalModule,BsDatepickerModule,RatingModule} from 'ngx-bootstrap';
import { SubmitComponent } from './global-modal/submit/submit.component';
import {MatRadioModule,MatSlideToggleModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    MissingComponent,
    GlobalModalComponent,
    SubmitComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNMwX1QVNDqd5eUs6kNBKDQtWiXLRWYQA'
    }),
    ButtonsModule,
    BsDatepickerModule.forRoot(),
    MatSlideToggleModule,
    MatRadioModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ProgramsModule,
    Ng2PageScrollModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule,
    ReactiveFormsModule
  ],
  providers: [PageScrollService,ProgramsService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
