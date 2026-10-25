import { Component , signal   } from '@angular/core';
import { videojuegoService } from '../../videojuegos/services/videojuego';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-videojuegos',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  standalone: true,
  templateUrl: './lista-de-videojuegos.html',
  styleUrl: './lista-de-videojuegos.css', 
})

export class ListaDeVideojuegos {

  videojuegos = signal<any[]>([]);
esAdmin() {
  return this.authService.tieneRol('admin');
}

constructor(
  private servicio: videojuegoService,
  public authService: AuthService,
  private router: Router
) {}

ngOnInit() {
  this.servicio.getVideojuegos().subscribe(datos => {
    console.log('Datos recibidos:', datos);
    this.videojuegos.set(datos);
  });
}

eliminar(id: number) {
  const confirmar = confirm(
    '¿Estás seguro de que querés eliminar este videojuego?'
  );

  if (!confirmar) {
    return;
  }

  this.servicio.eliminarVideojuego(String(id)).subscribe({
    next: () => {
      this.videojuegos.update(lista =>
        lista.filter(videojuego => videojuego.id !== id)
      );
    },
    error: error => {
      console.log('Error al eliminar:', error);
      alert('No se pudo eliminar el videojuego. Intentá nuevamente.');
    }
  });
}
cerrarSesion() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}