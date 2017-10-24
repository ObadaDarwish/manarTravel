import {Component, OnInit} from '@angular/core';
import {GlobalServiceService} from '../global-service.service';
import {ProgramsService} from './programs.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-porgrams',
  templateUrl: './porgrams.component.html',
  styleUrls: ['./porgrams.component.css']
})


export class PorgramsComponent implements OnInit {

  childUnitCost: number = 0;
  ExchangeRate: any;

  constructor(private route: ActivatedRoute, private programService: ProgramsService, private globalService: GlobalServiceService) {
  }

  ngOnInit() {
    window.scroll(0, 0);
    let code=this.route.snapshot.params['id'];
    this.programService.getChildCost(code).subscribe(
      response=> {
        this.childUnitCost = response[0].price;
      },
      error => {
        console.log(error);
      }
    );
    this.programService.getExchangeRate().subscribe(
      response=> {
        this.ExchangeRate = response[0];
      },
      error => {
        console.log(error);
      }
    );
  }
  submit(value)
  {
    this.globalService.globalModalSwitch=value;
    this.globalService.globalModalToggle=!this.globalService.globalModalToggle;
  }

}
