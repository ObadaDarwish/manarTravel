import {Component, OnInit, Input, OnChanges,ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {GlobalServiceService} from '../global-service.service';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.css']
})
export class GlobalModalComponent implements OnInit {


  @ViewChild('globalModal') public globalModal:ModalDirective;
  @Input() modal: any;
  constructor(private globalService:GlobalServiceService) {
  }

  ngOnInit() {
  }

  ngOnChanges(change: any) {
    if (!change.modal.isFirstChange()) {
      this.modal = this.globalService.globalModalSwitch;
      if (change.modal.currentValue) {
        this.globalModal.show();
      }
      else {
        this.globalModal.hide();
      }
    }

  }

}
