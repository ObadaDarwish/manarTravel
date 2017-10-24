import { BrowserModule } from '@angular/platform-browser';
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
import { RatingModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import {GlobalServiceService} from './global-service.service';
import {ProgramsService} from './programs/programs.service';
import { GlobalModalComponent } from './global-modal/global-modal.component';
import { ModalModule} from 'ngx-bootstrap';
import { SubmitComponent } from './global-modal/submit/submit.component';

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
  providers: [PageScrollService,ProgramsService,GlobalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
