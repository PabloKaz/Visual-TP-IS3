import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';

interface Course {
  title: string;
  category: string;
  progress: number;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatIcon,
    MatCardModule,
    MatFormField,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CodeSandbox';

  sidebarOpen = true;

  courses: Course[] = [
    {
      title: 'Diseño UX Básico',
      category: 'Diseño',
      progress: 60,
      image: 'https://placehold.co/400x200?text=UX+Design',
    },
    {
      title: 'Introducción a JavaScript',
      category: 'Programación',
      progress: 30,
      image: 'https://placehold.co/400x200?text=JavaScript',
    },
    {
      title: 'Inteligencia Artificial',
      category: 'IA',
      progress: 80,
      image: 'https://placehold.co/400x200?text=AI+Course',
    },
  ];

  countdown = '';
  private resetTime = 24 * 60 * 60; // 24 horas en segundos

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const startTime = localStorage.getItem('promoCountdownStart');
    const base = startTime ? +startTime : Date.now();
    if (!startTime)
      localStorage.setItem('promoCountdownStart', base.toString());

    const tick = () => {
      const now = Date.now();
      let diff = Math.floor((base + this.resetTime * 1000 - now) / 1000);

      if (diff <= 0) {
        localStorage.setItem('promoCountdownStart', Date.now().toString());
        diff = this.resetTime;
      }

      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;

      this.countdown = `${h}h ${m}m ${s}s.`;
      setTimeout(tick, 1000);
    };

    tick();
  }
}
