import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgramProfileService} from './program-profile.service';
@Component({
  selector: 'app-program-profile',
  templateUrl: './program-profile.component.html',
  styleUrls: ['./program-profile.component.css']
})
export class ProgramProfileComponent implements OnInit {
  programType: any;
  programProfile: any;
  arrivalDate: any;
  departureDate: any;

  constructor(private profileService: ProgramProfileService, private activeRoute: ActivatedRoute) {
    this.programType = this.activeRoute.snapshot.params['code'];
  }

  ngOnInit() {
    if (this.programType == 'umrah') {
      this.profileService.getUmrahProgram(this.activeRoute.snapshot.params['id']).subscribe(data=> {

        this.programProfile = data[0];
        this.arrivalDate = new Date(this.programProfile.arrivalDate);
        this.departureDate = new Date(this.programProfile.departureDate);

      })
    }
    else {
      this.profileService.getHajjProgram(this.activeRoute.snapshot.params['id']).subscribe(data=> {
        this.programProfile = data[0];
        this.arrivalDate = new Date(this.programProfile.arrivalDate);
        this.departureDate = new Date(this.programProfile.departureDate);
      })
    }


  }

}
