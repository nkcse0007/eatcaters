import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndUseComponent } from './terms-and-use.component';

describe('TermsAndUseComponent', () => {
  let component: TermsAndUseComponent;
  let fixture: ComponentFixture<TermsAndUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsAndUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
