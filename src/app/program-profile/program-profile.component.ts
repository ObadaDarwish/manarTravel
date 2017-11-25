import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-program-profile',
  templateUrl: './program-profile.component.html',
  styleUrls: ['./program-profile.component.css']
})
export class ProgramProfileComponent implements OnInit {
  programType: any;

  constructor(private activeRoute: ActivatedRoute) {
    this.programType = this.activeRoute.snapshot.params['code'];
  }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params['id']);
  }

}
