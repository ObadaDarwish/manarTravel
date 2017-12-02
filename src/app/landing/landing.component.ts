import {Component, OnInit, HostListener} from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {GlobalService} from '../global-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  contact_us_form: FormGroup;
  isloading: boolean = false;
  header: any;
  lat: number = 29.956359;
  lng: number = 31.259853;
  zoomlevel: number = 15;
  programs: any;
  constructor(private router: Router, private fb: FormBuilder, public globalService: GlobalService) {
    this.contact_us_form = fb.group({
      'first_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'last_name': ['', Validators.required],
      'message': ['', Validators.required],
    })
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 650) {
      this.globalService.opacity = true;
    } else {
      this.globalService.opacity = false;
    }
  }

  ngOnInit() {
    this.globalService.getAllManarPrograms().subscribe(data=> {
      this.programs = data;
    });
  }

  openProfile(type,id) {
    this.router.navigateByUrl('manar-program/' + type+'/'+id);
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
