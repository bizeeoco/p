import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyPetMemoriesComponent } from './c-my-pet-memories.component';

describe('CMyPetMemoriesComponent', () => {
  let component: CMyPetMemoriesComponent;
  let fixture: ComponentFixture<CMyPetMemoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMyPetMemoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMyPetMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
