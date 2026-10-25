import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  guardarSesion(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  obtenerUsuario() {
    const datos = localStorage.getItem('usuario');

    if (datos) {
      return JSON.parse(datos);
    }

    return null;
  }

  estaLogueado() {
    return this.obtenerUsuario() !== null;
  }

  tieneRol(rol: string) {
  const usuario = this.obtenerUsuario();
  return usuario !== null && usuario.rol === rol;
  }
  
  logout() {
    localStorage.removeItem('usuario');
  }
}