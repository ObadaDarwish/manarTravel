import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgramProfileService} from './program-profile.service';
import {GlobalService} from '../global-service.service';
@Component({
  selector: 'app-program-profile',
  templateUrl: './program-profile.component.html',
  styleUrls: ['./program-profile.component.css']
})
export class ProgramProfileComponent implements OnInit {


  isProfileLoading: boolean = false;


  constructor(public globalService: GlobalService, private profileService: ProgramProfileService, private activeRoute: ActivatedRoute) {
    this.profileService.programType = this.activeRoute.snapshot.params['code'];
    this.profileService.programId = this.activeRoute.snapshot.params['id'];
    this.globalService.opacity = false;
  }

  ngOnInit() {
    this.profileService.gallery = null;
    this.isProfileLoading = true;
    if (this.profileService.programType == 'umrah') {
      this.profileService.getUmrahProgram(this.profileService.programId).subscribe(data=> {
        this.profileService.programProfile = data[0];
        if (data[0].route) {
          this.profileService.tripRoute = data[0].route.split(',');
        }
        if (data[0].gallery) {
          this.profileService.gallery = JSON.parse(data[0].gallery);
          this.profileService.gallery.forEach((value, index)=> {
            this.profileService.is_active.push(false);
          });
          this.profileService.is_active[0] = true;
        }
        this.profileService.arrivalDate = new Date(this.profileService.programProfile.arrivalDate);
        this.profileService.departureDate = new Date(this.profileService.programProfile.departureDate);
        this.isProfileLoading = false;
      })
    }
    else {
      this.profileService.getHajjProgram(this.profileService.programId).subscribe(data=> {
        this.profileService.programProfile = data[0];
        if (data[0].route) {
          this.profileService.tripRoute = data[0].route.split(',');
        }
        if (data[0].gallery) {
          this.profileService.gallery = JSON.parse(data[0].gallery);
          this.profileService.gallery.forEach((value, index)=> {
            this.profileService.is_active.push(false);
          });
          this.profileService.is_active[0] = true;
        }
        this.profileService.arrivalDate = new Date(this.profileService.programProfile.arrivalDate);
        this.profileService.departureDate = new Date(this.profileService.programProfile.departureDate);
        this.isProfileLoading = false;
      })
    }


  }

  requestProgram() {
    this.globalService.program_type = this.profileService.programType;
    this.globalService.program_id = this.profileService.programId;
    this.globalService.globalModalToggle = !this.globalService.globalModalToggle;
    this.globalService.globalModalSwitch = 'submit';


  }

}
