import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { USUARIOS } from 'src/app/data/usuarios';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = '';
  contrasena = '';
  error = false;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  login() {
    const user = USUARIOS.find(
      (u) => u.usuario === this.usuario && u.contraseña === this.contrasena
    );

    if (user) {
      localStorage.setItem(
        'usuario',
        JSON.stringify({ usuario: user.usuario, rol: user.rol })
      );

      this.snackBar.open('✅ Inicio de sesión exitoso', 'Cerrar', {
        duration: 3000,
        panelClass: 'snack-success',
      });

      this.router.navigate(['/inicio']);
    } else {
      this.error = true;
    }
  }
}
