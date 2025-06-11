import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-recomendador-tags',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
  ],
  templateUrl: './recomendador-tags.component.html',
  styleUrls: ['./recomendador-tags.component.css'],
})
export class RecomendadorTagsComponent {
  tags = ['Tecnología', 'Arte', 'Idiomas', 'Diseño', 'Negocios'];
  seleccionados: string[] = [];

  cursos = [
    {
      titulo: 'HTML y CSS Básico',
      descripcion: 'Introducción al desarrollo web.',
      categoria: 'Tecnología',
      imagen: 'https://placehold.co/400x200?text=HTML+CSS',
    },
    {
      titulo: 'Fundamentos de Dibujo',
      descripcion: 'Aprendé arte desde cero.',
      categoria: 'Arte',
      imagen: 'https://placehold.co/400x200?text=Arte',
    },
    {
      titulo: 'Portugués para principiantes',
      descripcion: 'Comenzá a hablar portugués hoy mismo.',
      categoria: 'Idiomas',
      imagen: 'https://placehold.co/400x200?text=Portugués',
    },
    {
      titulo: 'Diseño UX/UI',
      descripcion: 'Crea interfaces atractivas y funcionales.',
      categoria: 'Diseño',
      imagen: 'https://placehold.co/400x200?text=UX+UI',
    },
    {
      titulo: 'Emprendé con éxito',
      descripcion: 'Estrategias para lanzar tu negocio.',
      categoria: 'Negocios',
      imagen: 'https://placehold.co/400x200?text=Negocios',
    },
  ];

  cursosFiltrados: any[] = [];

  toggleTag(tag: string) {
    const i = this.seleccionados.indexOf(tag);
    if (i >= 0) this.seleccionados.splice(i, 1);
    else this.seleccionados.push(tag);
  }

  mostrarCursos() {
    this.cursosFiltrados = this.cursos.filter((curso) =>
      this.seleccionados.includes(curso.categoria)
    );
  }
}
