import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeVideojuegos } from './lista-de-videojuegos';

describe('ListaDeVideojuegos', () => {
  let component: ListaDeVideojuegos;
  let fixture: ComponentFixture<ListaDeVideojuegos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeVideojuegos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeVideojuegos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
