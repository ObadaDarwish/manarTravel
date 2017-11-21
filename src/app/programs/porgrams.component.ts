import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../global-service.service';
import {ProgramsService} from './programs.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-porgrams',
  templateUrl: './porgrams.component.html',
  styleUrls: ['./porgrams.component.css']
})


export class PorgramsComponent implements OnInit {

  ExchangeRate: any;
  ViewTotalTripCost: boolean = false;
  totalTrip: any;
  Includes:any;
  generalConditions:any;

  constructor(private route: ActivatedRoute, private programService: ProgramsService, private globalService: GlobalService) {
  }

  ngOnInit() {
    this.globalService.opacity = true;
    window.scroll(0, 0);
    let code = this.route.snapshot.params['id'];
    this.programService.getMakkahHotels(code).subscribe(
      response=> {
        this.programService.makkahhotels = response;
        for (let hotel = 0; hotel < response.length; hotel++) {
          this.programService.makkahSelectedHotel.push(false);
        }
      },
      error => {
        console.log(error);
      }
    );
    this.programService.getMadinahHotels(code).subscribe(
      response=> {
        this.programService.maddinahhotels = response;
        for (let hotel = 0; hotel < response.length; hotel++) {
          this.programService.maddinahSelectedHotel.push(false);
        }
      },
      error => {
        console.log(error);
      }
    );

    this.programService.getMiscSum1(code).subscribe(
      response=> {
        this.programService.miscSum1 = response[0];

      },
      error => {
        console.log(error);
      }
    );
    this.programService.getMiscSum2(code).subscribe(
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

    this.programService.getProgramRules(code).subscribe(response=> {
      console.log(response);
       this.Includes = response[0].Includes.replace(/rn/g,'');
       this.generalConditions = response[0].generalconditons.replace(/rn/g,'');

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

      let makkahTotal = this.programService.MakkahroomPrice * (Math.abs(Math.round(makkahnights / (1000 * 60 * 60 * 24))));
      let maddinahTotal = this.programService.MaddinahroomPrice * (Math.abs(Math.round(madinahnights / (1000 * 60 * 60 * 24))));
      let misc1 = parseInt(this.programService.miscSum1, 10);
      let misc2 = parseInt(this.programService.miscSum2, 10);
      let TotalAccommodation = makkahTotal + maddinahTotal + misc1;
      console.log('Total Accommodation ' + TotalAccommodation);
      let TotalAfterExchangeRate = TotalAccommodation * this.ExchangeRate;
      console.log('Total After Exchnage rate : ' + Math.round(TotalAfterExchangeRate));
      let TotalAfterMisc2 = TotalAfterExchangeRate + misc2;
      console.log('Total trip : ' + TotalAfterMisc2);
      this.totalTrip = TotalAfterMisc2;
      this.ViewTotalTripCost = true;
    }
    else {
      console.log("All fields are required");
    }

  }


}
