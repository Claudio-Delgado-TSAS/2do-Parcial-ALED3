import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  errorMensaje = '';

  formulario = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ingresar() {
    if (this.formulario.valid) {

      const usuario = this.formulario.value.usuario;
      const password = this.formulario.value.password;

      if (
        (usuario === 'admin' && password === '1234') ||
        (usuario === 'usuario' && password === '1234')
      ) {
        this.errorMensaje = '';

        const sesion = {
          nombre: usuario,
          rol: usuario === 'admin' ? 'admin' : 'usuario'
        };

        this.authService.guardarSesion(sesion);

        console.log('Inicio de sesión correcto');
        this.router.navigate(['/videojuegos']);

      } else {
        this.errorMensaje = 'Usuario o contraseña incorrectos';
      }
    }
  }
}