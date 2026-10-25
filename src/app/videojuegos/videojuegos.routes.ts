import { Routes } from '@angular/router';
import { adminGuard } from '../auth/guards/admin.guard';

export const rutaVideojuegos: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/lista-de-videojuegos/lista-de-videojuegos')
        .then(m => m.ListaDeVideojuegos)
  },
  {
    path: 'agregar',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('../agregar-videojuego/agregar-videojuego')
        .then(m => m.AgregarVideojuego)
  },
  {
    path: 'modificar/:id',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('../pages/modificar-videojuego/modificar-videojuego')
        .then(m => m.ModificarVideojuego)
  }
];