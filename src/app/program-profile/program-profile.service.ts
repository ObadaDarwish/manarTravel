import { Injectable } from '@angular/core';
import {AppSettings} from '../api.settings';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, BehaviorSubject} from "rxjs";
@Injectable()
export class ProgramProfileService {

  constructor(private http:Http) { }




  getUmrahProgram(code): Observable<any>{

    return this.http.get(`${AppSettings.API_ENDPOINT()}/getManarUmrahProgram/${code}`, AppSettings.getRequestOptions()) .map(response => {
      return response.json();
    })

  }
}
