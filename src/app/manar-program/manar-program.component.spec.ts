import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManarProgramComponent } from './manar-program.component';

describe('ManarProgramComponent', () => {
  let component: ManarProgramComponent;
  let fixture: ComponentFixture<ManarProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManarProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManarProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
