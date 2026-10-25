import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'videojuegos', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'videojuegos',
    loadChildren: () =>
      import('./videojuegos/videojuegos.routes')
        .then(m => m.rutaVideojuegos)
  }
];