import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVideojuego } from './modificar-videojuego';

describe('ModificarVideojuego', () => {
  let component: ModificarVideojuego;
  let fixture: ComponentFixture<ModificarVideojuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarVideojuego],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarVideojuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
