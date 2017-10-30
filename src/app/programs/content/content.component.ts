import {Component, OnInit} from '@angular/core';
import {GlobalServiceService} from '../../global-service.service';
import {ProgramsService} from '../programs.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, BehaviorSubject} from "rxjs";
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  madinahhotels: any;
  makkahhotels: any;
  MakkahUnitCost: number = 0;
  MadinahUnitCost: number = 0;
  McheckInOut: FormGroup;

  public radioModel: string = '';

  Makkahcheckin: any;
  Makkahcheckout: any;
  Maddinahcheckin: any;
  Maddinahcheckout: any;
  childrenNumber: number;
  MakkahNightsIsChosen: boolean = false;
  MadinahNightsIsChosen: boolean = false;
  public max: number = 5;
  public rate: number = 3;
  public isReadonly: boolean = true;
  isSelected: boolean = true;
  currentDate = new Date();
  MakkahcheckinError: boolean = false;
  MakkahErrorMassage: string;
  MadinahcheckinError: boolean = false;
  ErrorMassage: string;
  color:any;
  constructor(private globalService: GlobalServiceService, private activeRouter: ActivatedRoute, private programService: ProgramsService) {
  }

  ngOnInit() {

    let code = this.activeRouter.parent.snapshot.params['id'];
    this.programService.getMadinahHotels(code).subscribe(
      response=> {
        this.madinahhotels = response;
      },
      error => {
        console.log(error);
      }
    );
    this.programService.getMakkahHotels(code).subscribe(
      response=> {
        this.makkahhotels = response;
      },
      error => {
        console.log(error);
      }
    );
    this.programService.getMiscSum1(code).subscribe(
      response=> {
        this.globalService.miscSum1 = response[0];

      },
      error => {
        console.log(error);
      }
    );
    this.programService.getMiscSum2(code).subscribe(
      response=> {
        this.globalService.miscSum2 = response[0];
      },
      error => {
        console.log(error);
      }
    );


  }


  selectMakkahHotel(name, currency, single, double, triple, quad) {
    this.globalService.MakkahhotelDetails = [];
    this.globalService.MakkahhotelDetails.push({
      name: name,
      currency: currency,
      single: single,
      double: double,
      triple: triple,
      quad: quad,
    });

  }

  selectMadinahHotel(name, currency, single, double, triple, quad) {
    this.globalService.MadinahhotelDetails = [];
    this.globalService.MadinahhotelDetails.push({
      name: name,
      currency: currency,
      single: single,
      double: double,
      triple: triple,
      quad: quad,
    });
  }

  MakkahNightCalculation(checkin, checkout) {
    let currentdate = new Date(this.currentDate).getTime();
    let checkIN = new Date(checkin).getTime();
    let checkOut = new Date(checkout).getTime();

    if (!isNaN(checkIN) && !isNaN(checkOut)) {
      if (checkIN < currentdate || checkOut < currentdate) {
        this.MakkahcheckinError = true;
        this.ErrorMassage = 'check in & check out dates should be later than ' +
          this.currentDate.getDate() + '-' + (this.currentDate.getMonth() + 1) + '-' +
          this.currentDate.getFullYear() + ' !';
      }
      else if (checkIN > checkOut) {
        this.MakkahcheckinError = true;
        this.ErrorMassage = 'check out date should be later than your check in date !';
      }
      else {
        let night = (checkOut - checkIN);
        this.globalService.MakkahNights = Math.abs(Math.round(night / (1000 * 60 * 60 * 24)));
        this.globalService.MakkahAccommodationCoast = this.globalService.MakkahNights * this.MakkahUnitCost;
        this.MakkahcheckinError = false;
      }
    }

  }

  MaddinahNightCalculation(checkin, checkout) {
    let currentdate = new Date(this.currentDate).getTime();
    let checkIN = new Date(checkin).getTime();
    let checkOut = new Date(checkout).getTime();

    if (!isNaN(checkIN) && !isNaN(checkOut)) {
      if (checkIN < currentdate || checkOut < currentdate) {
        this.MadinahcheckinError = true;
        this.ErrorMassage = 'check in & check out dates should be later than ' +
          this.currentDate.getDate() + '-' + (this.currentDate.getMonth() + 1) + '-' +
          this.currentDate.getFullYear() + ' !';
      }
      else if (checkIN > checkOut) {
        this.MadinahcheckinError = true;
        this.ErrorMassage = 'check out date should be later than your check in date !';
      }
      else {
        let night = (checkOut - checkIN);
        this.globalService.MadinahNights = Math.abs(Math.round(night / (1000 * 60 * 60 * 24)));
        this.globalService.MadinahAccommodationCoast = this.globalService.MadinahNights * this.MadinahUnitCost;
        this.MadinahcheckinError = false;
      }
    }
  }

  MakkahRoomType(roomType, value) {
    this.globalService.MakkahRoom = roomType;
    this.MakkahUnitCost = value;
    this.globalService.MakkahAccommodationCoast = this.globalService.MakkahNights * this.MakkahUnitCost;
  }

  childCost(childrenNumber) {
    this.globalService.childrenNumber = childrenNumber;
  }


  MadinahRoomType(roomType, value) {
    this.globalService.MadinahRoom = roomType;
    this.MadinahUnitCost = value;
    this.globalService.MadinahAccommodationCoast = this.globalService.MadinahNights * this.MadinahUnitCost;
  }

}
