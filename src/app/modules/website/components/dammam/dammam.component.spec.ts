import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DammamComponent} from './dammam.component';

describe('DammamComponent', () => {
    let component: DammamComponent;
    let fixture: ComponentFixture<DammamComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DammamComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DammamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
