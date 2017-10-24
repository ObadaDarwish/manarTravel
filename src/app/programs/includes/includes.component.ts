import {Component, OnInit} from '@angular/core';
import {ProgramsService} from '../programs.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-includes',
  templateUrl: './includes.component.html',
  styleUrls: ['./includes.component.css']
})
export class IncludesComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private programService: ProgramsService) {
  }

  includesString: string;
  generalString: string;
  temp: boolean = false;
  includes: any;
  general: any;

  ngOnInit() {
    let code = this.activeRouter.parent.snapshot.params['id'];

    this.programService.getProgramRules(code).subscribe(response=> {
      this.includesString = response[0].includes;
      this.generalString = response[0].general;
      this.includes = this.includesString.split(",");
      this.general = this.generalString.split(",");
      console.log(this.includes, this.general);
    });
  }

}
