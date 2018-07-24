import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAccomodationHomeStayComponent } from './v-accomodation-home-stay.component';

describe('VAccomodationHomeStayComponent', () => {
  let component: VAccomodationHomeStayComponent;
  let fixture: ComponentFixture<VAccomodationHomeStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAccomodationHomeStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAccomodationHomeStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
