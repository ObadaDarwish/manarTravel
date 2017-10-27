import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {
    this.contact_us_form = fb.group({
      'first_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'last_name': ['', Validators.required],
      'message': ['', Validators.required],
    })
  }
  contact_us_form: FormGroup;
  isloading: boolean = false;
  ngOnInit() {
  }

  contactUs(value, valid) {
    // this.isloading = true;
    // this.landingService.postContactUs(this.contact_us_form.value.first_name, this.contact_us_form.value.last_name, this.contact_us_form.value.email
    //   , this.contact_us_form.value.message, this.minDate
    // ).subscribe(
    //   response=> {
    //     this.loading.complete();
    //     this.notify.success('Success', ' request had been sent');
    //     this.isloading = false;
    //     this.contact_us_form.reset();
    //   },
    //   error=> {
    //     this.loading.complete();
    //     this.notify.error('Error', 'Can not send request');
    //     this.isloading = false;
    //   }
    // );
  }
}
