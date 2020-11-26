import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJeddahComponent } from './admin-jeddah.component';

describe('AdminJeddahComponent', () => {
  let component: AdminJeddahComponent;
  let fixture: ComponentFixture<AdminJeddahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJeddahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJeddahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
