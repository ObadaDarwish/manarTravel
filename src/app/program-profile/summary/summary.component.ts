import { Component, OnInit } from '@angular/core';
import {GlobalService} from  '../../global-service.service';
import {ProgramProfileService} from '../program-profile.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(public profileService:ProgramProfileService,public globalService:GlobalService) { }

  ngOnInit() {
  }

}
