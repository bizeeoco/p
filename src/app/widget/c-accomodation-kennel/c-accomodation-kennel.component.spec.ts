import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccomodationKennelComponent } from './c-accomodation-kennel.component';

describe('CAccomodationKennelComponent', () => {
  let component: CAccomodationKennelComponent;
  let fixture: ComponentFixture<CAccomodationKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAccomodationKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAccomodationKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
