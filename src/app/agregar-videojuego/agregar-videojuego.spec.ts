import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarVideojuego } from './agregar-videojuego';

describe('AgregarVideojuego', () => {
  let component: AgregarVideojuego;
  let fixture: ComponentFixture<AgregarVideojuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarVideojuego],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarVideojuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});