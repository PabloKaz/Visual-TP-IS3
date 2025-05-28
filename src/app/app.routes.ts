import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Agregá otras rutas si querés
];
