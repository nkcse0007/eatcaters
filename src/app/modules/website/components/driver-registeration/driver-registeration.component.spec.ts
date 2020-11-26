import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRegisterationComponent } from './driver-registeration.component';

describe('DriverRegisterationComponent', () => {
  let component: DriverRegisterationComponent;
  let fixture: ComponentFixture<DriverRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
