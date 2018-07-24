import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAdoptionsComponent } from './c-adoptions.component';

describe('CAdoptionsComponent', () => {
  let component: CAdoptionsComponent;
  let fixture: ComponentFixture<CAdoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAdoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAdoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
