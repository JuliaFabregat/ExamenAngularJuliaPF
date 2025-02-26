import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

export const routes: Routes = [
    // Componentes
    {path: 'inicio', component: InicioComponent},
    {path: 'nav', component: NavComponent},
    {path: 'presupuesto', component: PresupuestoComponent},

    // Redirecciones al iniciar y al no encontrar la ruta
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];
