import { Component } from '@angular/core';
import { videojuegoService } from '../../services/videojuego';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista-de-videojuegos',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './lista-de-videojuegos.html',
  styleUrl: './lista-de-videojuegos.css', 
})
export class ListaDeVideojuegos {
  videojuegos: any[]=[];
  constructor (private servicio: videojuegoService){};
  ngOnInit(){
  this.videojuegos = this.servicio.getVideojuegos();
  }
}
