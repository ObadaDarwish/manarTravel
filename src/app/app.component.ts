import {Component, OnInit} from '@angular/core';
import {GlobalService} from './global-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private globalService: GlobalService) {

  }

  ngOnInit() {

  }
}
