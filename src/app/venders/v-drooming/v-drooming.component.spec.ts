import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VDroomingComponent } from './v-drooming.component';

describe('VDroomingComponent', () => {
  let component: VDroomingComponent;
  let fixture: ComponentFixture<VDroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VDroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VDroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
