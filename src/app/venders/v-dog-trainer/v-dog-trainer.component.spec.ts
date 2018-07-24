import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VDogTrainerComponent } from './v-dog-trainer.component';

describe('VDogTrainerComponent', () => {
  let component: VDogTrainerComponent;
  let fixture: ComponentFixture<VDogTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VDogTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VDogTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
