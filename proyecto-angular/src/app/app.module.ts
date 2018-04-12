import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MatMomentDateModule} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import { AppComponent } from './app.component';
import { ReservasComponent } from './reservas/reservas.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { SalasComponent } from './edificios/salas/salas.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { CabeceraComponent } from './navegacion/cabecera/cabecera.component';
import { MenuLateralComponent } from './navegacion/menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    EdificiosComponent,
    SalasComponent,
    AuthComponent,
    LoginComponent,
    CabeceraComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, 
    MatMomentDateModule, MatSidenavModule, MatToolbarModule, MatListModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
