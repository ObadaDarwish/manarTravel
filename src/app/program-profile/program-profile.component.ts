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

  constructor(private profileService: ProgramProfileService, private activeRoute: ActivatedRoute) {
    this.programType = this.activeRoute.snapshot.params['code'];
  }

  ngOnInit() {

    this.profileService.getUmrahProgram(this.activeRoute.snapshot.params['id']).subscribe(data=> {
      console.log(data);
      this.programProfile = data[0];
    })

  }

}
