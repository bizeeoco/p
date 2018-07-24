import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAccomodationKennelComponent } from './v-accomodation-kennel.component';

describe('VAccomodationKennelComponent', () => {
  let component: VAccomodationKennelComponent;
  let fixture: ComponentFixture<VAccomodationKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAccomodationKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAccomodationKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
