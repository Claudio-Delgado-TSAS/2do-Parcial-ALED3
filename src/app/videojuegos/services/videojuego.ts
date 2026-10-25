import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root',
})
export class videojuegoService {

  private url = 'https://6ab963a4f84897980b7293e4.mockapi.io/videojuegos/videojuegos';

  constructor(private http: HttpClient) {}

  getVideojuegos() {
    return this.http.get<videojuego[]>(this.url);
  }
  getVideojuego(id: string) {
  return this.http.get<videojuego>(this.url + '/' + id);
  }
  
  agregarVideojuego(videojuego: videojuego) {
  return this.http.post<videojuego>(this.url, videojuego);
  }

  eliminarVideojuego(id: string) {
   return this.http.delete(this.url + '/' + id);
  }
  modificarVideojuego(id: string, videojuego: videojuego) {
  return this.http.put<videojuego>(this.url + '/' + id, videojuego);
}
}