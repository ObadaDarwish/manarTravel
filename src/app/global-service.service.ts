import {Injectable} from '@angular/core';
import {hotelDetails} from './programs/hotelDetails.interface';
@Injectable()


export class GlobalService {

  MakkahhotelDetails: Array<hotelDetails> = [];
  MadinahhotelDetails: Array<hotelDetails> = [];
  MakkahNights: number = 0;
  MadinahNights: number = 0;
  MakkahRoom: string;
  MadinahRoom: string;
  MakkahAccommodationCoast: number = 0;
  MadinahAccommodationCoast: number = 0;
  miscSum1: number;
  miscSum2: number;
  childrenNumber: number = 0;
  globalModalToggle: boolean;
  globalModalSwitch:string;
  opacity: boolean = false;
  constructor() {
  }

}
