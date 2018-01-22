import {Component, OnInit} from '@angular/core';
import {ProgramProfileService} from '../program-profile.service';
import {GlobalService} from '../../global-service.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public profileService: ProgramProfileService, public globalService: GlobalService) {
  }


  ngOnInit() {
  }

  selectIMG(index) {
    this.profileService.is_active.forEach((value, index)=> {
      this.profileService.is_active[index] = false;
    });
    this.profileService.is_active[index] = true;
  }
}
