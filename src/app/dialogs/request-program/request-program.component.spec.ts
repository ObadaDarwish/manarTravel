import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProgramComponent } from './request-program.component';

describe('RequestProgramComponent', () => {
  let component: RequestProgramComponent;
  let fixture: ComponentFixture<RequestProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
