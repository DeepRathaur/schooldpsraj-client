import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiverComponent } from './achiver.component';

describe('AchiverComponent', () => {
  let component: AchiverComponent;
  let fixture: ComponentFixture<AchiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
