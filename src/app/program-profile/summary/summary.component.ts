import { Component, OnInit } from '@angular/core';
import {GlobalService} from  '../../global-service.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(public globalService:GlobalService) { }

  ngOnInit() {
  }

}
