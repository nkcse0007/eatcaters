import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannertitleComponent } from './bannertitle.component';

describe('BannertitleComponent', () => {
  let component: BannertitleComponent;
  let fixture: ComponentFixture<BannertitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannertitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannertitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
