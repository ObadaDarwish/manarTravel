import {Injectable} from '@angular/core';
import {hotelDetails} from './programs/hotelDetails.interface';
import {AppSettings} from './api.settings';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class GlobalService {
  imagePath: string = '';
  MakkahhotelDetails: Array<hotelDetails> = [];
  MadinahhotelDetails: Array<hotelDetails> = [];
  MakkahNights: number = 0;
  MadinahNights: number = 0;
  MakkahRoom: string;
  MadinahRoom: string;
  MakkahAccommodationCoast: number = 0;
  MadinahAccommodationCoast: number = 0;

  childrenNumber: number = 0;
  globalModalToggle: boolean;
  globalModalSwitch: string;
  opacity: boolean = false;

  constructor(private http: Http) {
  }

  getAllManarPrograms() {

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getAllManarPrograms`) .map(response => {
      return response.json();
    })
  }
}
