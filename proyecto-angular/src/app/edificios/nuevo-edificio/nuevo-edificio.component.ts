import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../../api-rest';
import { Provincia } from '../../../api-rest';
import { Poblacion } from '../../../api-rest';
import { EdificioMockService } from '../edificio.mock.service';
// Práctica 4.4: Usar API Swagger: Create
// Alguien debería incluir el servicio DefaultService:

import { NgForm,FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import 'rxjs/add/operator/debounceTime';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nuevo-edificio',
  templateUrl: './nuevo-edificio.component.html',
  styleUrls: ['./nuevo-edificio.component.css']
})

export class NuevoEdificioComponent {
  searchTermProvincia : FormControl = new FormControl();
  searchTermPoblacion : FormControl = new FormControl();
  searchResultProvincia: Provincia[] = [];
  searchResultPoblacion: Poblacion[] = [];

  private idProvincia: number = 0;
  private idPoblacion: number= 0;
  private nombrePoblacion: string= "";
  private edificio: Edificio;
  private poblacion: Poblacion;
  private provinciaSeleccionada: Provincia= null;

// Práctica 4.4: Usar API Swagger: Create
// Alguien debería añadir un servicio tipo DefaultService en el constructor:
  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.searchTermProvincia.valueChanges      
      .debounceTime(400)  
      .subscribe(data => {
          this.defaultService.getProvincias(data).subscribe(
            response =>{
            this.searchResultProvincia = response;
            this.idProvincia = this.searchResultProvincia[0].id;
            this.filtrarPoblacionesPorProvincia();
            console.log("this.idProvincia: " + this.idProvincia);
          })
      })
    this.searchTermPoblacion.valueChanges
    .debounceTime(400)  
    .subscribe(data2 => {
        this.defaultService.getPoblaciones(this.idProvincia,data2).subscribe(
          response =>{
          console.log(response);
          this.searchResultPoblacion = response;
          this.idPoblacion = this.searchResultPoblacion[0].id;
          this.nombrePoblacion = this.searchResultPoblacion[0].poblacion;
          console.log("this.idPoblacion: " + this.idPoblacion);
        })
    })
  }
  
  onSubmit(form: NgForm){
    console.log(form.value.nombre, form.value.tipoVia, form.value.nombreVia, form.value.numeroVia, form.value.codigoPostal, form.value.titularidad, form.value.poblacion);
    // , form.value.poblacion.id, form.value.poblacion.poblacion  );
    this.edificio = {nombre:form.value.nombre, direccion:{ tipoVia: form.value.tipoVia, nombreVia: form.value.nombreVia, numeroVia:form.value.numeroVia, codigoPostal: form.value.codigoPostal, poblacion:{id: this.idPoblacion, poblacion: this.nombrePoblacion}}, titularidad:form.value.titularidad };
    console.log("Pulsado Aceptar Nuevo Edificio. Edificio.id: " + this.edificio.id + " " + this.edificio.nombre + " ");
    // Práctica 4.4: Usar API Swagger: Create
    // Alguien debería invocar un método del servicio DefaultService:
    
    // Práctica 4.4: Usar API Swagger: Create
    // Alguien debería descomentar el snackbar para notificar al usuario y navegar a 'edificios':
    
    // let snackBarRef = this.snackBar.open('Edificio: ' + form.value.nombre + ' creado correctamente', null, {
    //   duration:3000
    // });
    // snackBarRef.afterDismissed().subscribe(() => {
    //   console.log('La snackbar se ha cerrado');
    //   this.router.navigate(['edificios']);
    // });    
    
  }

  filtrarPoblacionesPorProvincia(){
    this.defaultService.getPoblaciones(this.idProvincia).subscribe(response =>{
      console.log(response);
      this.searchResultPoblacion = response
    })
  }
}
