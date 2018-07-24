import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPetPhotographyComponent } from './c-pet-photography.component';

describe('CPetPhotographyComponent', () => {
  let component: CPetPhotographyComponent;
  let fixture: ComponentFixture<CPetPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPetPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPetPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
