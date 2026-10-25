import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { videojuegoService } from '../videojuegos/services/videojuego';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agregar-videojuego',
  imports: [
    CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule,
  ],
  standalone: true,
  templateUrl: './agregar-videojuego.html',
  styleUrl: './agregar-videojuego.css'
})
export class AgregarVideojuego {

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
    private servicio: videojuegoService,
    private router: Router
  ) {}

  guardar() {
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

    this.servicio.agregarVideojuego(videojuego).subscribe({
      next: () => {
        alert('Videojuego agregado correctamente');
        this.router.navigate(['/videojuegos']);
      },
      error: error => {
        console.log('Error al agregar:', error);
        this.errorMensaje = 'No se pudo agregar el videojuego. Intentá nuevamente.';
        this.guardando = false;
      }
    });
  }
}