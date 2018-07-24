import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccomodationHomeStayComponent } from './c-accomodation-home-stay.component';

describe('CAccomodationHomeStayComponent', () => {
  let component: CAccomodationHomeStayComponent;
  let fixture: ComponentFixture<CAccomodationHomeStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAccomodationHomeStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAccomodationHomeStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
