import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchstatusComponent } from './branchstatus.component';

describe('BranchstatusComponent', () => {
  let component: BranchstatusComponent;
  let fixture: ComponentFixture<BranchstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
