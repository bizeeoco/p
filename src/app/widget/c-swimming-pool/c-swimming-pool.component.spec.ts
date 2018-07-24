import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSwimmingPoolComponent } from './c-swimming-pool.component';

describe('CSwimmingPoolComponent', () => {
  let component: CSwimmingPoolComponent;
  let fixture: ComponentFixture<CSwimmingPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSwimmingPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSwimmingPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
