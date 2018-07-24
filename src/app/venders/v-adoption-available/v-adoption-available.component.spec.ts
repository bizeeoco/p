import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAdoptionAvailableComponent } from './v-adoption-available.component';

describe('VAdoptionAvailableComponent', () => {
  let component: VAdoptionAvailableComponent;
  let fixture: ComponentFixture<VAdoptionAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAdoptionAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAdoptionAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
