import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDogTrainingComponent } from './c-dog-training.component';

describe('CDogTrainingComponent', () => {
  let component: CDogTrainingComponent;
  let fixture: ComponentFixture<CDogTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDogTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDogTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
