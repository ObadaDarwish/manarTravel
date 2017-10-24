import { Component } from '@angular/core';
import {GlobalServiceService} from './global-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private globalService:GlobalServiceService){

}
}
