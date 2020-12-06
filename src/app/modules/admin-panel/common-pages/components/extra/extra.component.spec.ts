import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraComponent } from './extra.component';
import { SaucesComponent } from './sauces/sauces.component';

describe('ExtraComponent', () => {
  let component: ExtraComponent;
  let SaucesComponent: SaucesComponent;
  let fixture: ComponentFixture<ExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraComponent, SaucesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});