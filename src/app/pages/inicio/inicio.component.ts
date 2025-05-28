import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  cursos = [
    {
      title: 'Curso de UX',
      description: 'Aprendé diseño de experiencias con casos reales.',
      rating: 4,
      price: '$49.00',
      image: 'https://placehold.co/400x200?text=UX+Pro',
    },
    {
      title: 'JavaScript Avanzado',
      description: 'Domina JS moderno y asincronía como un experto.',
      rating: 5,
      price: '$59.00',
      image: 'https://placehold.co/400x200?text=JS+Avanzado',
    },
    {
      title: 'Inteligencia Artificial',
      description: 'Creá proyectos con IA generativa y modelos de lenguaje.',
      rating: 3,
      price: '$89.00',
      image: 'https://placehold.co/400x200?text=IA',
    },
  ];

  plans = [
    {
      title: 'Personal Plan',
      for: 'Para vos (individual)',
      price: 'Desde $11.00/mes',
      cta: 'Probar gratis',
      features: [
        'Acceso a 2000+ cursos top',
        'Preparación para la certificación',
        'Recomendaciones personalizadas',
        'Ejercicios de codificación con IA',
      ],
    },
    {
      title: 'Team Plan',
      for: 'Equipos de 2 a 20 personas',
      price: '$30.00 por usuario/mes',
      cta: 'Probar gratis',
      features: [
        'Acceso a 13,000+ cursos top',
        'Certificaciones y reportes',
        'Ejercicios con IA',
        'Análisis y reportes de adopción',
      ],
    },
    {
      title: 'Plan Enterprise',
      for: 'Empresas grandes (20+ personas)',
      price: 'Contactar ventas',
      cta: 'Solicitar demo',
      features: [
        'Acceso a 30,000+ cursos',
        'Contenido personalizable',
        '15 idiomas disponibles',
        'Soporte y consultoría premium',
      ],
    },
  ];

  compactCourses = [
    {
      image: 'https://placehold.co/250x150?text=Curso+1',
      title: 'Curso de UX rápido',
      description: 'Aprendé fundamentos en solo horas.',
      price: '$12.99',
    },
    {
      image: 'https://placehold.co/250x150?text=Curso+2',
      title: 'TypeScript desde cero',
      description: 'Lo esencial para empezar ya.',
      price: '$15.99',
    },
    {
      image: 'https://placehold.co/250x150?text=Curso+3',
      title: 'Angular Intermedio',
      description: 'Escalá tus conocimientos.',
      price: '$19.99',
    },
    {
      image: 'https://placehold.co/250x150?text=Curso+4',
      title: 'Diseño Web moderno',
      description: 'CSS Grid, Flexbox y más.',
      price: '$9.99',
    },
    {
      image: 'https://placehold.co/250x150?text=Curso+5',
      title: 'Inteligencia Artificial',
      description: 'Introducción práctica.',
      price: '$22.00',
    },
    {
      image: 'https://placehold.co/250x150?text=Curso+6',
      title: 'React para principiantes',
      description: 'Crea tu primera app.',
      price: '$17.00',
    },
  ];

  // Duplicamos los cursos para lograr el loop infinito visual
  get loopedCourses() {
    return [...this.compactCourses, ...this.compactCourses];
  }

  carouselIndex = 0;
  carouselTransform = 'translateX(0%)';

  ngOnInit() {
    setInterval(() => this.animateCarousel(), 3000); // cada 3 segundos
  }

  animateCarousel() {
    const total = this.compactCourses.length;
    this.carouselIndex = (this.carouselIndex + 1) % total;
    this.carouselTransform = `translateX(-${this.carouselIndex * 25}%)`;
  }

  compactIndex = 0;

  get visibleCompactCourses() {
    return this.compactCourses.slice(this.compactIndex, this.compactIndex + 4);
  }

  nextCompact() {
    this.compactIndex =
      (this.compactIndex + 1) % (this.compactCourses.length - 3);
  }

  currentIndex = 0;

  animate = false;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cursos.length;
    this.animate = true;
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cursos.length) % this.cursos.length;
    this.animate = true;
  }

  stars(n: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < n);
  }
}
