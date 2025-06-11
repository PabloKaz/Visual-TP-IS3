import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./layout/app-layout.component').then((m) => m.AppLayoutComponent),
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/inicio/inicio.component').then(
            (m) => m.InicioComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'recomendador-tags',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import(
            './pages/recomendador/recomendador-tags/recomendador-tags.component'
          ).then((m) => m.RecomendadorTagsComponent),
      },
      {
        path: 'recomendador-premium',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import(
            './pages/recomendador/recomendador-premium/recomendador-premium.component'
          ).then((m) => m.RecomendadorPremiumComponent),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
