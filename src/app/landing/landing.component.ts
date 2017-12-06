import {Component, OnInit, HostListener} from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {GlobalService} from '../global-service.service';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  contact_us_form: FormGroup;
  isContactLoading: boolean = false;
  header: any;
  lat: number = 29.956359;
  lng: number = 31.259853;
  zoomlevel: number = 15;
  programs: any;
  currentDate: Date = new Date();
  isgetAllProgramsLoading: boolean = false;

  constructor(private notify: NotificationsService, private router: Router, private fb: FormBuilder, public globalService: GlobalService) {
    this.contact_us_form = fb.group({
      'first_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'last_name': ['', Validators.required],
      'mobile': ['', Validators.required],
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
    this.isgetAllProgramsLoading = true;
    this.globalService.getAllManarPrograms().subscribe(data=> {
      this.programs = data;
      this.isgetAllProgramsLoading = false;
    }, error=> {
      this.isgetAllProgramsLoading = false;
    });
  }

  openProfile(type, id) {
    this.router.navigateByUrl('manar-program/' + type + '/' + id);
  }

  contactUs(value, valid) {
    this.isContactLoading = true;
    this.globalService.postContactUs(this.contact_us_form.value, this.currentDate).subscribe(
      response=> {
        this.notify.success('Success', 'Request had been sent');
        this.isContactLoading = false;
        this.contact_us_form.reset();
      },
      error=> {
        this.notify.error('Error', 'Can not send request');
        this.isContactLoading = false;
      }
    );
  }
}
