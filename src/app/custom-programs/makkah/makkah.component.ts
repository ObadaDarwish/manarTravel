import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../global-service.service';
import {customProgramsService} from '../custom-programs.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, BehaviorSubject} from "rxjs";
import {FormGroup, FormBuilder} from '@angular/forms';
import {AppSettings} from '../../api.settings';
@Component({
  selector: 'app-makkah',
  templateUrl: './makkah.component.html',
  styleUrls: ['./makkah.component.css']
})
export class MakkahComponent implements OnInit {


  bsConfig: any = {containerClass: 'theme-blue'};
  public max: number = 5;
  public rate: number = 3;
  public isReadonly: boolean = true;
  minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());

  constructor(public globalService: GlobalService, private activeRouter: ActivatedRoute, public programService: customProgramsService) {
  }

  ngOnInit() {


  }

  selectHotel(index,name) {
    this.globalService.MakkahSelectedHotel = name;
    this.programService.MakkahhotelIndex = index;
    for (let hotel = 0; hotel < this.programService.makkahSelectedHotel.length; hotel++) {
      this.programService.makkahSelectedHotel[hotel] = false;
    }
    this.programService.makkahSelectedHotel[index] = true;

  }


  // selectMakkahHotel(name, currency, single, double, triple, quad) {
  //   this.globalService.MakkahhotelDetails = [];
  //   this.globalService.MakkahhotelDetails.push({
  //     name: name,
  //     currency: currency,
  //     single: single,
  //     double: double,
  //     triple: triple,
  //     quad: quad,
  //   });
  //
  // }
  // //
  // selectMadinahHotel(name, currency, single, double, triple, quad) {
  //   this.globalService.MadinahhotelDetails = [];
  //   this.globalService.MadinahhotelDetails.push({
  //     name: name,
  //     currency: currency,
  //     single: single,
  //     double: double,
  //     triple: triple,
  //     quad: quad,
  //   });
  // }

  // MakkahNightCalculation(checkin, checkout) {
  //   let currentdate = new Date(this.currentDate).getTime();
  //   let checkIN = new Date(checkin).getTime();
  //   let checkOut = new Date(checkout).getTime();
  //
  //   if (!isNaN(checkIN) && !isNaN(checkOut)) {
  //     if (checkIN < currentdate || checkOut < currentdate) {
  //       this.MakkahcheckinError = true;
  //       this.ErrorMassage = 'check in & check out dates should be later than ' +
  //         this.currentDate.getDate() + '-' + (this.currentDate.getMonth() + 1) + '-' +
  //         this.currentDate.getFullYear() + ' !';
  //     }
  //     else if (checkIN > checkOut) {
  //       this.MakkahcheckinError = true;
  //       this.ErrorMassage = 'check out date should be later than your check in date !';
  //     }
  //     else {
  //       let night = (checkOut - checkIN);
  //       this.globalService.MakkahNights = Math.abs(Math.round(night / (1000 * 60 * 60 * 24)));
  //       this.globalService.MakkahAccommodationCoast = this.globalService.MakkahNights * this.MakkahUnitCost;
  //       this.MakkahcheckinError = false;
  //     }
  //   }
  //
  // }
  //
  // MaddinahNightCalculation(checkin, checkout) {
  //   let currentdate = new Date(this.currentDate).getTime();
  //   let checkIN = new Date(checkin).getTime();
  //   let checkOut = new Date(checkout).getTime();
  //
  //   if (!isNaN(checkIN) && !isNaN(checkOut)) {
  //     if (checkIN < currentdate || checkOut < currentdate) {
  //       this.MadinahcheckinError = true;
  //       this.ErrorMassage = 'check in & check out dates should be later than ' +
  //         this.currentDate.getDate() + '-' + (this.currentDate.getMonth() + 1) + '-' +
  //         this.currentDate.getFullYear() + ' !';
  //     }
  //     else if (checkIN > checkOut) {
  //       this.MadinahcheckinError = true;
  //       this.ErrorMassage = 'check out date should be later than your check in date !';
  //     }
  //     else {
  //       let night = (checkOut - checkIN);
  //       this.globalService.MadinahNights = Math.abs(Math.round(night / (1000 * 60 * 60 * 24)));
  //       this.globalService.MadinahAccommodationCoast = this.globalService.MadinahNights * this.MadinahUnitCost;
  //       this.MadinahcheckinError = false;
  //     }
  //   }
  // }
  //
  // MakkahRoomType(roomType, value) {
  //   this.globalService.MakkahRoom = roomType;
  //   this.MakkahUnitCost = value;
  //   this.globalService.MakkahAccommodationCoast = this.globalService.MakkahNights * this.MakkahUnitCost;
  // }
  //
  // childCost(childrenNumber) {
  //   this.globalService.childrenNumber = childrenNumber;
  // }
  //
  //
  // MadinahRoomType(roomType, value) {
  //   this.globalService.MadinahRoom = roomType;
  //   this.MadinahUnitCost = value;
  //   this.globalService.MadinahAccommodationCoast = this.globalService.MadinahNights * this.MadinahUnitCost;
  // }

}
