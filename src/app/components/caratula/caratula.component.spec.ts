import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersHeroesComponent } from './filters-heroes.component';

describe('FiltersHeroesComponent', () => {
  let component: FiltersHeroesComponent;
  let fixture: ComponentFixture<FiltersHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
