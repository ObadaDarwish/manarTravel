import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GlobalService} from '../../global-service.service';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
@Component({
  selector: 'app-request-program',
  templateUrl: './request-program.component.html',
  styleUrls: ['./request-program.component.css']
})
export class RequestProgramComponent implements OnInit {
  request: FormGroup;
  loadRequest: boolean = false;

  constructor(public dialogRef: MatDialogRef<RequestProgramComponent>, private notify: NotificationsService, public globalService: GlobalService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.request = fb.group({
      'full_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'mobile': ['', Validators.required]
    })
  }

  currentDate: Date = new Date();

  ngOnInit() {

  }

  requestProgram(value, valid, data) {
    if (valid) {
      this.loadRequest=true;
      this.globalService.postRequestCustomProgram(value, data, this.currentDate).subscribe(
        response=> {
          this.loadRequest=false;
          this.notify.success('Success', 'Request had been sent');
          this.dialogRef.close();
          this.request.reset();

        },
        error=> {
          this.loadRequest=false;
          this.notify.error('Error', 'Can not send request');
        }
      );
    }
  }
}
