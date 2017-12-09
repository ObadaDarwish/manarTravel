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
  MadinahSelectedHotel: string;
  MakkahSelectedHotel: string;

  constructor(private http: Http) {
  }

  getAllManarPrograms() {

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getAllManarPrograms`) .map(response => {
      return response.json();
    })
  }

  postContactUs(value, date) {
    let body = JSON.stringify({
      first_name: value.first_name,
      last_name: value.last_name,
      message: value.message,
      email: value.email,
      mobile: value.mobile,
      created_at: date
    });
    return this.http.post(`${AppSettings.API_ENDPOINT()}/contactUS`, body, AppSettings.getRequestOptions()) .map(response => {
      return response;
    });
  }

  postRequestCustomProgram(value,data, date) {
    let body = JSON.stringify({
      full_name: value.full_name,
      email: value.email,
      mobile: value.mobile,
      madinah_hotel: data.madinah_hotel,
      madinah_check_in: data.madinah_check_in,
      madinah_check_out: data.madinah_check_out,
      makkah_hotel: data.makkah_hotel,
      makkah_check_in: data.makkah_check_in,
      makkah_check_out: data.makkah_check_out,
      madinah_nights: data.madinah_nights,
      makkah_nights: data.makkah_nights,
      room_type: data.room_type,
      price: data.price,
      created_at: date
    });
    return this.http.post(`${AppSettings.API_ENDPOINT()}/requestCustomProgram`, body, AppSettings.getRequestOptions()) .map(response => {
      return response;
    });
  }
}
