import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ApiModule } from './api.module';
import { EdificioMockService } from './edificios/edificio.mock.service'

//Imports de Angular Material:
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, 
  MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, 
  MatSortModule, MatPaginatorModule, MatTooltipModule, MatMenuModule} from '@angular/material';

  //Imports relacionados con moment.js:
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MatMomentDateModule} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

//Imports creados con ng g c:
import { AppComponent } from './app.component';
import { ReservasComponent } from './reservas/reservas.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { SalasComponent } from './edificios/salas/salas.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { CabeceraComponent } from './comun/navegacion/cabecera/cabecera.component';
import { MenuLateralComponent } from './comun/navegacion/menu-lateral/menu-lateral.component';
import { NuevaReservaComponent } from './reservas/nueva-reserva/nueva-reserva.component';
import { ReservaDetalleComponent } from './reservas/reserva-detalle/reserva-detalle.component';
import { SalaDetalleComponent } from './edificios/salas/sala-detalle/sala-detalle.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DialogoConfirmacionComponent } from './comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { DialogoEdicionComponent } from './edificios/dialogo-edicion/dialogo-edicion.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    EdificiosComponent,
    SalasComponent,
    AuthComponent,
    LoginComponent,
    CabeceraComponent,
    MenuLateralComponent,
    NuevaReservaComponent,
    ReservaDetalleComponent,
    SalaDetalleComponent,
    LogoutComponent,
    DialogoConfirmacionComponent,
    DialogoEdicionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, 
    MatMomentDateModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule,
    MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, FlexLayoutModule,
    MatTableModule, MatSortModule, MatPaginatorModule, MatTooltipModule, MatMenuModule,
    FormsModule
  ],
  providers: [
    EdificioMockService,
    {provide: MAT_DATE_LOCALE, useValue: 'es'},
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogoConfirmacionComponent,DialogoEdicionComponent,SalaDetalleComponent]
})
export class AppModule { }
