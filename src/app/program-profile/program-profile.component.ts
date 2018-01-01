import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgramProfileService} from './program-profile.service';
import {GlobalService} from '../global-service.service';
@Component({
  selector: 'app-program-profile',
  templateUrl: './program-profile.component.html',
  styleUrls: ['./program-profile.component.css']
})
export class ProgramProfileComponent implements OnInit {
  programType: any;
  programId: any;
  programProfile: any;
  arrivalDate: any;
  departureDate: any;
  isProfileLoading: boolean = false;
  tripRoute: any;

  constructor(public globalService: GlobalService, private profileService: ProgramProfileService, private activeRoute: ActivatedRoute) {
    this.programType = this.activeRoute.snapshot.params['code'];
    this.programId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.isProfileLoading = true;
    if (this.programType == 'umrah') {
      this.profileService.getUmrahProgram(this.programId).subscribe(data=> {
        this.programProfile = data[0];
        this.tripRoute = data[0].route.split(',');
        this.arrivalDate = new Date(this.programProfile.arrivalDate);
        this.departureDate = new Date(this.programProfile.departureDate);
        this.isProfileLoading = false;
      })
    }
    else {
      this.profileService.getHajjProgram(this.programId).subscribe(data=> {
        this.programProfile = data[0];
        this.arrivalDate = new Date(this.programProfile.arrivalDate);
        this.departureDate = new Date(this.programProfile.departureDate);
        this.isProfileLoading = false;
      })
    }


  }

  requestProgram() {
    this.globalService.program_type = this.programType;
    this.globalService.program_id = this.programId;
    this.globalService.globalModalToggle = !this.globalService.globalModalToggle;
    this.globalService.globalModalSwitch = 'submit';


  }
}
