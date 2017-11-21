import {Component, OnInit} from '@angular/core';
import {ProgramsService} from '../programs.service';
import {ActivatedRoute} from '@angular/router';
import {AppSettings} from '../../api.settings';
import {GlobalService} from '../../global-service.service';
@Component({
  selector: 'app-madinah',
  templateUrl: './maddinah.component.html',
  styleUrls: ['./maddinah.component.css']
})
export class MaddinahComponent implements OnInit {

  constructor(public globalService: GlobalService, private activeRouter: ActivatedRoute, public programService: ProgramsService) {
  }

  public max: number = 5;
  public rate: number = 3;
  public isReadonly: boolean = true;
  bsConfig: any = {containerClass: 'theme-blue'};
  minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());

  ngOnInit() {


  }

  selectHotel(index) {
    this.programService.MaddinahhotelIndex = index;
    for (let hotel = 0; hotel < this.programService.maddinahSelectedHotel.length; hotel++) {
      this.programService.maddinahSelectedHotel[hotel] = false;
    }
    this.programService.maddinahSelectedHotel[index] = true;
  }



}
