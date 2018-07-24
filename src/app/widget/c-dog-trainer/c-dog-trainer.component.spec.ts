import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDogTrainerComponent } from './c-dog-trainer.component';

describe('CDogTrainerComponent', () => {
  let component: CDogTrainerComponent;
  let fixture: ComponentFixture<CDogTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDogTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDogTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
