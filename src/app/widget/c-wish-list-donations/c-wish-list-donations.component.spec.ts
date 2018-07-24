import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWishListDonationsComponent } from './c-wish-list-donations.component';

describe('CWishListDonationsComponent', () => {
  let component: CWishListDonationsComponent;
  let fixture: ComponentFixture<CWishListDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWishListDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWishListDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
