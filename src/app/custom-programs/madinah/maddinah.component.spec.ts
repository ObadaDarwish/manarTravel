import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludesComponent } from './includes.component';

describe('MaddinahComponent', () => {
  let component: IncludesComponent;
  let fixture: ComponentFixture<IncludesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
