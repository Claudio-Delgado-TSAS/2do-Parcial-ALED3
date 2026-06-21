import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ListaDeVideojuegos } from './pages/lista-de-videojuegos/lista-de-videojuegos';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'lista', component: ListaDeVideojuegos }
];
