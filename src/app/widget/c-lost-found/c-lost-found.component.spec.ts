import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLostFoundComponent } from './c-lost-found.component';

describe('CLostFoundComponent', () => {
  let component: CLostFoundComponent;
  let fixture: ComponentFixture<CLostFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLostFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLostFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
