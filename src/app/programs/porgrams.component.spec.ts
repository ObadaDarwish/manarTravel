import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorgramsComponent } from './porgrams.component';

describe('PorgramsComponent', () => {
  let component: PorgramsComponent;
  let fixture: ComponentFixture<PorgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
