/**
 * Created by ObadaDarwish on 22/04/2017.
 */
import {Headers, RequestOptions} from "@angular/http";
import {environment} from "../environments/environment";

export class AppSettings {

  public static API_ENDPOINT(): string {
    if (!environment.production)
      return 'http://localhost:8000';
    else
      return 'http://localhost:8000';
  }

  public static getRequestOptions() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new RequestOptions({headers: headers});
  }

}
