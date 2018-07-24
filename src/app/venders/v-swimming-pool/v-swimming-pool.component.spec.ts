import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSwimmingPoolComponent } from './v-swimming-pool.component';

describe('VSwimmingPoolComponent', () => {
  let component: VSwimmingPoolComponent;
  let fixture: ComponentFixture<VSwimmingPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSwimmingPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSwimmingPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
