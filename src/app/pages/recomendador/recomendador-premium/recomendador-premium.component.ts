import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recomendador-premium',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './recomendador-premium.component.html',
  styleUrls: ['./recomendador-premium.component.css'],
})
export class RecomendadorPremiumComponent {
  userMessage = '';
  chatMessages: { from: 'user' | 'bot'; text: string }[] = [];
  recomendado: { titulo: string; descripcion: string; imagen: string } | null =
    null;

  enviarMensaje() {
    if (!this.userMessage.trim()) return;

    // Agregar mensaje del usuario
    this.chatMessages.push({ from: 'user', text: this.userMessage });

    // Simulación IA
    setTimeout(() => {
      this.chatMessages.push({
        from: 'bot',
        text: 'Entiendo perfectamente, lo que buscás es:',
      });

      this.recomendado = {
        titulo: 'Curso de Inteligencia Artificial con Python',
        descripcion: 'Aprendé a construir modelos de IA desde cero.',
        imagen: 'https://placehold.co/400x200?text=IA+con+Python',
      };
    }, 1000);

    this.userMessage = '';
  }
}
