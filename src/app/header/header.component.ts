import {Component, OnInit} from '@angular/core';
import {GlobalService}from '../global-service.service' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public globalService: GlobalService) {
  }


  ngOnInit() {
  }

  changeLanguage(value) {
    this.globalService.lang_selected = value;
    localStorage.setItem('language', value);
    this.globalService.language = require('../../lang/' + value + '/lang.json');
  }

}
