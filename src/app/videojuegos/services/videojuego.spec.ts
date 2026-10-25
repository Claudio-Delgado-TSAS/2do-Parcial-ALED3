import { TestBed } from '@angular/core/testing';
import { videojuegoService } from './videojuego';

describe('Videojuego', () => {
  let service:videojuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(videojuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});