import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VOutDoorActivityComponent } from './v-out-door-activity.component';

describe('VOutDoorActivityComponent', () => {
  let component: VOutDoorActivityComponent;
  let fixture: ComponentFixture<VOutDoorActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VOutDoorActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VOutDoorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
