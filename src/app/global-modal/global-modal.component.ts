import {Component, OnInit, Input, OnChanges,ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {GlobalService} from '../global-service.service';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.css']
})
export class GlobalModalComponent implements OnInit {


  @ViewChild('globalModal') public globalModal:ModalDirective;
  @Input() modal: any;
  constructor(private globalService:GlobalService) {
  }

  ngOnInit() {
  }

  ngOnChanges(change: any) {
    if (!change.modal.isFirstChange()) {
      this.modal = this.globalService.globalModalSwitch;
      this.globalModal.toggle();
    }
  }

  onHide() {

  }

}
