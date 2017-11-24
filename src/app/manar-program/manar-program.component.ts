import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-manar-program',
  templateUrl: './manar-program.component.html',
  styleUrls: ['./manar-program.component.css']
})
export class ManarProgramComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  openProgram() {
    this.route.navigateByUrl('/manar-program/sdsakds');
  }
}
