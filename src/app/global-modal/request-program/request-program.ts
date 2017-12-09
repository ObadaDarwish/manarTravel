import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {GlobalService} from '../../global-service.service';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';

@Component({
  selector: 'app-submit',
  templateUrl: './request-program.html',
  styleUrls: ['./request-program.css']
})
export class requestProgram implements OnInit {
  request: FormGroup;
  loadRequest: boolean = false;
  currentDate: Date = new Date();

  constructor(private notify: NotificationsService, public globalService: GlobalService, private fb: FormBuilder) {
    this.request = fb.group({
      'full_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'mobile': ['', Validators.required]
    })
  }

  ngOnInit() {

  }


  requestProgram(value, valid) {
    if (valid) {
      this.loadRequest = true;
      this.globalService.postRequestManarProgram(value, this.globalService.program_type, this.globalService.program_id, this.currentDate).subscribe(
        response=> {
          this.loadRequest = false;
          this.notify.success('Success', 'Request had been sent');
          this.request.reset();
          this.globalService.globalModalToggle = !this.globalService.globalModalToggle;

        },
        error=> {
          this.loadRequest = false;
          this.notify.error('Error', 'Can not send request');
        }
      );
    }
  }
}
