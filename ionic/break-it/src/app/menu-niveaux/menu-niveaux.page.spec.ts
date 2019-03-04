import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNiveauxPage } from './menu-niveaux.page';

describe('MenuNiveauxPage', () => {
  let component: MenuNiveauxPage;
  let fixture: ComponentFixture<MenuNiveauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNiveauxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNiveauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
