import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasComponent } from './reservas/reservas.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { SalasComponent } from './edificios/salas/salas.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'edificios', component: EdificiosComponent},
  { path: 'salas', component: SalasComponent },
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
 imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
