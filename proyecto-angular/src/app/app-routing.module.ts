import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasComponent } from './reservas/reservas.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { SalasComponent } from './edificios/salas/salas.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: ReservasComponent },
  { path: 'reservas', component: ReservasComponent},
  { path: 'edificios', component: EdificiosComponent},
  { path: 'salas', component: SalasComponent }
];

@NgModule({
 imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
