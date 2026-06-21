import { Injectable } from '@angular/core';
import { videojuego } from '../interface/videojuego';

@Injectable({
  providedIn: 'root',
})
export class videojuegoService {

private videojuegos: videojuego[] = [
{id:1,
  nombre: 'Outlast',
  descripcion: 'El infierno es un experimento del que no puedes sobrevivir en Outlast, un videojuego de terror y supervivencia en primera persona desarrollado por veteranos de algunas de las franquicias de videojuegos más importantes de la historia. Como el periodista de investigación Miles Upshur, explora el Mount Massive Asylum e intenta sobrevivir el tiempo suficiente para descubrir su terrible secreto... si te atreves.',
  clasificacion: 'M',
  genero: 'Terror - Supervivencia - Primera Persona',
  plataforma: 'PC, PlayStation, XBox',
  precio: 12.000,

},{ id:2,
  nombre: 'Minecraft',
  descripcion: 'Sumérgete en un mundo abierto de construcción, creación y supervivencia en Minecraft: el mejor juego sandbox simulador de construcción. Recolecta recursos, sobrevive a la noche y construye una aventura épica, bloque por bloque. Recorre un mundo abierto a través de la exploración y construcción donde puedes jugar con amigos. Construye una ciudad de bloques, crea una granja, mina las profundidades del suelo, enfrenta a enemigos misteriosos o, simplemente, ¡experimenta llevando tu imaginación al máximo!',
  clasificacion: 'E+10',
  genero: 'Sandbox - Multijugador - PvP',
  plataforma: 'PC, PlayStation, XBox',
  precio: 38.574,
},{ id:3,
  nombre: 'Rocket League',
  descripcion: 'Rocket League combina el fútbol de estilo arcade con el caos a cuatro ruedas, unos controles fáciles y una competición fluida y basada en la física.',
  clasificacion: 'E',
  genero: 'Carreras',
  plataforma: 'PC, PlayStation, XBox',
  precio: 0,
},{ id:4,
  nombre: 'PLAYERUNKNOWNS BATTLEGROUNDS',
  descripcion: '¡PUBG: BATTLEGROUNDS, el arriesgado shooter, donde el ganador se lo lleva todo, y que inició la pasión por el Battle Royale, es gratuito! Despliégate en todo tipo de mapas, saquea suministros y armas únicas, y sobrevive en una zona que se encoge constantemente y donde cada paso podría ser el último.',
  clasificacion: 'T',
  genero: 'Supervivencia - Disparos - Multijugador',
  plataforma: 'PC, PlayStation, XBox',
  precio: 0,
}
];
getVideojuegos() {
      return this.videojuegos;
  }
}
