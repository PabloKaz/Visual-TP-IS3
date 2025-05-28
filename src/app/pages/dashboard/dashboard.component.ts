import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  courses = [
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
      image: 'https://placehold.co/400x200?text=IA',
    },
  ];
}
