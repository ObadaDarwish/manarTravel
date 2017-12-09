import {Component, OnInit, OnDestroy} from '@angular/core';
import {GlobalService} from '../global-service.service';
import {ProgramsService} from './programs.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RequestProgramComponent} from '../dialogs/request-program/request-program.component';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';

@Component({
  selector: 'app-porgrams',
  templateUrl: './porgrams.component.html',
  styleUrls: ['./porgrams.component.css']
})


export class PorgramsComponent implements OnInit {

  ExchangeRate: any;
  ViewTotalTripCost: boolean = false;
  totalTrip: any;
  Includes: any;
  generalConditions: any;
  noMakkahNights: number = 0;
  noMaddinahNights: number = 0;
  programType: string = '';

  constructor(private notify: NotificationsService, public dialog: MatDialog, private route: ActivatedRoute, private programService: ProgramsService, private globalService: GlobalService) {
  }

  ngOnInit() {
    this.globalService.opacity = true;
    window.scroll(0, 0);
    this.programType = this.route.snapshot.params['id'];
    this.programService.isMakKahAccommodationLoading = true;
    this.programService.isMaddinahAccommodationLoading = true;
    this.programService.getMakkahHotels(this.programType).subscribe(
      response=> {
        this.programService.isMakKahAccommodationLoading = false;
        this.programService.makkahhotels = response;
        for (let hotel = 0; hotel < response.length; hotel++) {
          this.programService.makkahSelectedHotel.push(false);
        }
      },
      error => {
        this.programService.isMakKahAccommodationLoading = false;
        console.log(error);
      }
    );

    this.programService.getMadinahHotels(this.programType).subscribe(
      response=> {
        this.programService.isMaddinahAccommodationLoading = false;
        this.programService.maddinahhotels = response;
        for (let hotel = 0; hotel < response.length; hotel++) {
          this.programService.maddinahSelectedHotel.push(false);
        }
      },
      error => {
        this.programService.isMaddinahAccommodationLoading = false;
        console.log(error);
      }
    );

    this.programService.getMiscSum1(this.programType).subscribe(
      response=> {
        this.programService.miscSum1 = response[0];

      },
      error => {
        console.log(error);
      }
    );
    this.programService.getMiscSum2(this.programType).subscribe(
      response=> {
        this.programService.miscSum2 = response[0];
      },
      error => {
        console.log(error);
      }
    );
    // this.programService.getChildCost(code).subscribe(
    //   response=> {
    //     this.childUnitCost = response[0].price;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.programService.getExchangeRate().subscribe(
      response=> {
        this.ExchangeRate = parseFloat(response[0]);
      },
      error => {
        console.log(error);
      }
    );

    this.programService.getProgramRules(this.programType).subscribe(response=> {
      console.log(response);
      this.Includes = response[0].Includes.replace(/rn/g, '');
      this.generalConditions = response[0].generalconditons.replace(/rn/g, '');

    });
  }

  CalculateProgram() {
    let makkahnights;
    let madinahnights;

    if (this.programService.roomType &&
      this.programService.MakkahbsRangeValue.length != 0 && this.programService.MaddinahbsRangeValue.length != 0 &&
      this.programService.MakkahhotelIndex != -1 && this.programService.MaddinahhotelIndex != -1) {

      //makkah hotel room added to "roomType" variable
      if (this.programService.roomType == 'Single') {
        this.programService.MakkahroomPrice = this.programService.makkahhotels[this.programService.MakkahhotelIndex].single;
        this.programService.MaddinahroomPrice = this.programService.maddinahhotels[this.programService.MaddinahhotelIndex].single;
      } else if (this.programService.roomType == 'Double') {
        this.programService.MakkahroomPrice = this.programService.makkahhotels[this.programService.MakkahhotelIndex].double;
        this.programService.MaddinahroomPrice = this.programService.maddinahhotels[this.programService.MaddinahhotelIndex].double;
      } else if (this.programService.roomType == 'Triple') {
        this.programService.MakkahroomPrice = this.programService.makkahhotels[this.programService.MakkahhotelIndex].triple;
        this.programService.MaddinahroomPrice = this.programService.maddinahhotels[this.programService.MaddinahhotelIndex].triple;
      } else {
        this.programService.MakkahroomPrice = this.programService.makkahhotels[this.programService.MakkahhotelIndex].quad;
        this.programService.MaddinahroomPrice = this.programService.maddinahhotels[this.programService.MaddinahhotelIndex].quad;
      }
      //calculating price of nights according to the hotel chosen and the number of nights
      makkahnights = this.programService.MakkahbsRangeValue[1].getTime() - this.programService.MakkahbsRangeValue[0].getTime();


//calculating price of nights according to the hotel chosen and the number of nights
      madinahnights = this.programService.MaddinahbsRangeValue[1].getTime() - this.programService.MaddinahbsRangeValue[0].getTime();
      this.noMakkahNights = (Math.abs(Math.round(makkahnights / (1000 * 60 * 60 * 24))));
      this.noMaddinahNights = (Math.abs(Math.round(madinahnights / (1000 * 60 * 60 * 24))));
      let makkahTotal = this.programService.MakkahroomPrice * (Math.abs(Math.round(makkahnights / (1000 * 60 * 60 * 24))));
      let maddinahTotal = this.programService.MaddinahroomPrice * (Math.abs(Math.round(madinahnights / (1000 * 60 * 60 * 24))));
      let misc1 = parseInt(this.programService.miscSum1, 10);
      let misc2 = parseInt(this.programService.miscSum2, 10);
      let TotalAccommodation = makkahTotal + maddinahTotal + misc1;
      // console.log('Total Accommodation ' + TotalAccommodation);
      let TotalAfterExchangeRate = TotalAccommodation * this.ExchangeRate;
      // console.log('Total After Exchnage rate : ' + Math.round(TotalAfterExchangeRate));
      let TotalAfterMisc2 = TotalAfterExchangeRate + misc2;
      // console.log('Total trip : ' + TotalAfterMisc2);
      this.totalTrip = TotalAfterMisc2;
      this.ViewTotalTripCost = true;
    }
    else {
      this.notify.info('Info', 'All fields are required');
    }

  }

  RequestProgram() {
    let dialogRef = this.dialog.open(RequestProgramComponent, {
      width: '700px',
      data: {
        program_type:this.programType,
        madinah_hotel: this.globalService.MadinahSelectedHotel,
        madinah_check_in: this.programService.MaddinahbsRangeValue[0],
        madinah_check_out: this.programService.MaddinahbsRangeValue[1],
        makkah_hotel: this.globalService.MakkahSelectedHotel,
        makkah_check_in: this.programService.MakkahbsRangeValue[0],
        makkah_check_out: this.programService.MakkahbsRangeValue[1],
        madinah_nights: this.noMaddinahNights,
        makkah_nights: this.noMakkahNights,
        room_type: this.programService.roomType,
        price: this.totalTrip
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != 'Cancel') {
        this.ViewTotalTripCost= false;
        this.programService.roomType = null;
        this.programService.maddinahSelectedHotel = [];
        this.programService.makkahSelectedHotel = [];
        this.programService.MaddinahbsRangeValue = [];
        this.programService.MakkahbsRangeValue = [];
      }
    });
  }

  ngOnDestroy() {
    this.ViewTotalTripCost= false;
    this.programService.roomType = null;
    this.programService.maddinahSelectedHotel = [];
    this.programService.makkahSelectedHotel = [];
    this.programService.MaddinahbsRangeValue = [];
    this.programService.MakkahbsRangeValue = [];
  }
}
