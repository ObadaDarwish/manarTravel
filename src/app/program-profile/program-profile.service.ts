import {Injectable} from '@angular/core';
import {AppSettings} from '../api.settings';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, BehaviorSubject} from "rxjs";
@Injectable()
export class ProgramProfileService {

  constructor(private http: Http) {
  }

  programType: any;
  programId: any;
  programProfile: any;
  gallery: any;
  is_active: Array<boolean> = [];
  arrivalDate: any;
  departureDate: any;
  tripRoute: any;

  getUmrahProgram(code): Observable<any> {

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getManarUmrahProgram/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }

  getHajjProgram(code): Observable<any> {

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getManarHajjProgram/${code}`) .map(response => {
      return response.json();
    })

  }
}
