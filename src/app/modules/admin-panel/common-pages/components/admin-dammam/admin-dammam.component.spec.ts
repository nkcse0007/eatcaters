import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDammamComponent } from './admin-dammam.component';

describe('AdminDammamComponent', () => {
  let component: AdminDammamComponent;
  let fixture: ComponentFixture<AdminDammamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDammamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDammamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
