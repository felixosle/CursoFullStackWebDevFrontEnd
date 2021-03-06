import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasComponent } from './reservas/reservas.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { SalasComponent } from './edificios/salas/salas.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NuevoEdificioComponent } from './edificios/nuevo-edificio/nuevo-edificio.component';
import { NuevaSalaComponent } from './edificios/salas/nueva-sala/nueva-sala.component';
import { NuevaReservaComponent } from './reservas/nueva-reserva/nueva-reserva.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'nuevaReserva', component: NuevaReservaComponent},
  { path: 'edificios', component: EdificiosComponent},
  { path: 'nuevoEdificio', component: NuevoEdificioComponent},
  { path: 'edificios/:idEdificio/salas', component: SalasComponent },
  { path: 'edificios/:idEdificio/nuevaSala', component: NuevaSalaComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
 imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
