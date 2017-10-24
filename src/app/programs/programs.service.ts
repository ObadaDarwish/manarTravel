import { Injectable } from '@angular/core';
import {AppSettings} from '../api.settings';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class ProgramsService {

  constructor(private http :Http) { }





  getMadinahHotels(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getMadinahHotels/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }

  getMakkahHotels(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getMakkahHotels/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }
  getMiscSum1(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getMisc1Sum/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }

  getMiscSum2(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getMisc2Sum/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }

  getExchangeRate(): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getEchnageRate`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }

  getChildCost(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getChildCost/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }


  getProgramRules(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getRules/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }
}
