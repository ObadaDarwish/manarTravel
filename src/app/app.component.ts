import {Component, OnInit} from '@angular/core';
import {GlobalService} from './global-service.service';
import {AppSettings} from './api.settings';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public globalService: GlobalService) {
    this.globalService.imagePath = AppSettings.PICTURE_ENDPOINT();
    if (localStorage.getItem('language')) {
      this.globalService.lang_selected = localStorage.getItem('language');
      this.globalService.language = require('../lang/' + localStorage.getItem('language') + '/lang.json');
    }
    else {
      localStorage.setItem('language', 'ar');
      this.globalService.lang_selected = 'ar';
      this.globalService.language = require('../lang/ar/lang.json');
    }

  }

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  };

  ngOnInit() {
  }
}
