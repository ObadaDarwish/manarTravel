import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../global-service.service';
@Component({
  selector: 'app-manar-program',
  templateUrl: './manar-program.component.html',
  styleUrls: ['./manar-program.component.css']
})
export class ManarProgramComponent implements OnInit {
  programs: any;
  isProgramsLoading:boolean=false;
  constructor(private route: Router, public globalService: GlobalService) {
  }

  ngOnInit() {
    this.isProgramsLoading=true;
    this.globalService.getAllManarPrograms().subscribe(data=> {
      this.programs = data;
      this.isProgramsLoading=false;
    },error=>{
      this.isProgramsLoading=false;
    });
  }

  openProfile(type,id) {
    this.route.navigateByUrl('manar-program/' + type+'/'+id);
  }
}
