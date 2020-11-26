import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRiyadhComponent } from './admin-riyadh.component';

describe('AdminRiyadhComponent', () => {
  let component: AdminRiyadhComponent;
  let fixture: ComponentFixture<AdminRiyadhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRiyadhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRiyadhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
