import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppimageComponent } from './appimage.component';

describe('AppimageComponent', () => {
  let component: AppimageComponent;
  let fixture: ComponentFixture<AppimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
