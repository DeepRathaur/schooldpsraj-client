import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionQueryComponent } from './admission-query.component';

describe('AdmissionQueryComponent', () => {
  let component: AdmissionQueryComponent;
  let fixture: ComponentFixture<AdmissionQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
