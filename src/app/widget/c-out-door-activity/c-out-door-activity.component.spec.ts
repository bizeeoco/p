import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COutDoorActivityComponent } from './c-out-door-activity.component';

describe('COutDoorActivityComponent', () => {
  let component: COutDoorActivityComponent;
  let fixture: ComponentFixture<COutDoorActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COutDoorActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COutDoorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
