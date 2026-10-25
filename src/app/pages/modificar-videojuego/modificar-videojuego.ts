import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { videojuegoService } from '../../videojuegos/services/videojuego';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modificar-videojuego',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './modificar-videojuego.html',
  styleUrl: './modificar-videojuego.css'
})
export class ModificarVideojuego {

  id: string = '';
  guardando = false;
  errorMensaje = '';

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    plataforma: new FormControl('', Validators.required),
    precio: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ]),
    clasificacion: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required)
  });

  constructor(
    private ruta: ActivatedRoute,
    private servicio: videojuegoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id')!;

    this.servicio.getVideojuego(this.id).subscribe(videojuego => {
      this.formulario.patchValue({
        nombre: videojuego.nombre,
        genero: videojuego.genero,
        plataforma: videojuego.plataforma,
        precio: videojuego.precio,
        clasificacion: videojuego.clasificacion,
        descripcion: videojuego.descripcion
      });
    });
  }

  modificar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    if (this.guardando) {
      return;
    }

    this.guardando = true;
    this.errorMensaje = '';

    const videojuego = {
      nombre: this.formulario.value.nombre!,
      genero: this.formulario.value.genero!,
      plataforma: this.formulario.value.plataforma!,
      precio: this.formulario.value.precio!,
      clasificacion: this.formulario.value.clasificacion!,
      descripcion: this.formulario.value.descripcion!
    };

    this.servicio.modificarVideojuego(this.id, videojuego).subscribe({
      next: () => {
        alert('Videojuego modificado correctamente');
        this.router.navigate(['/videojuegos']);
      },
      error: error => {
        console.log('Error al modificar:', error);
        this.errorMensaje = 'No se pudo modificar el videojuego. Intentá nuevamente.';
        this.guardando = false;
      }
    });
  }
}
