import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomeMadeProductsComponent } from './c-home-made-products.component';

describe('CHomeMadeProductsComponent', () => {
  let component: CHomeMadeProductsComponent;
  let fixture: ComponentFixture<CHomeMadeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHomeMadeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHomeMadeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
