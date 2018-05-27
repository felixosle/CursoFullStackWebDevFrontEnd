import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../api-rest/';
import { Provincia } from '../../../api-rest/';
import { Edificio } from '../../../api-rest/';
import { Sala } from '../../../api-rest/';
// import { EdificioMockService } from '../../edificios/edificio.mock.service'
import { DefaultService } from '../../../api-rest/';
import { NgForm, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import 'rxjs/add/operator/debounceTime';
// Práctica Angular Material:
import { MatSnackBar } from '@angular/material'; 


@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {
  private reserva: Reserva; 
  private edificios: Edificio []=[];
  private salas: Sala []=[];
  private minDate;
  private idProvincia:  number = 0;
  private idEdificio: number = 0;

  searchTermProvincia : FormControl = new FormControl();
  searchTermEdificio: FormControl = new FormControl();
  searchResultProvincia: Provincia[] = [];
  searchResultEdificio: Edificio[] = [];
  
  // Práctica Angular Material:
  constructor(private defaultService: DefaultService, private router: Router, private snackBar: MatSnackBar) { 
    
    this.searchTermProvincia.valueChanges
    .debounceTime(400)
    .subscribe(data => {
      this.defaultService.getProvincias(data).subscribe(
        response =>{
          this.searchResultProvincia = response;
          this.idProvincia = this.searchResultProvincia[0].id;
          this.filtrarEdificiosPorProvincia();
        }
      );
    })

    this.searchTermEdificio.valueChanges
    .debounceTime(400)
    .subscribe(data2 => {
      this.defaultService.getEdificios(data2,this.idProvincia).subscribe(
        response2 =>{
          this.searchResultEdificio = response2;
          this.idEdificio = this.searchResultEdificio[0].id;
          this.filtrarSalasPorEdificio();
        }
      );
    });
  }

  ngOnInit() {
    // Mock Service:
    // this.provincias = this.edificioMockService.getProvincias();
    // this.defaultService.getProvincias().subscribe( 
    //   data => {
    //     this.provincias = data;
    //   }
    // );
    this.minDate = new Date(); //La fecha mínima a elegir es hoy
    
  }
  
  onSubmit(form: NgForm){
    let fechaFormateada = form.value.fechaReserva.format('YYYY-MM-DD');
    console.log(fechaFormateada);
    this.reserva = {id: null, sala:{ id:form.value.sala, nombre:"" } , fechaReserva: fechaFormateada, usuario: form.value.usuario};
    console.log ("reserva.sala.id: " + this.reserva.sala.id + " " + this.reserva.sala.nombre + " " + this.reserva.usuario);
    console.log("Pulsado Aceptar Nueva Reserva. form.value.sala: " + form.value.sala + " Fecha: " + form.value.fechaReserva + " " );

    this.defaultService.agregarReserva(this.reserva).subscribe();
    // Práctica Angular Material:
    let snackBarRef =this.snackBar.open('Reserva creada correctamente', null, {
      duration:3000
    });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('La snackbar se ha cerrado');
      this.router.navigate(['reservas']);
    });
  }

  filtrarEdificiosPorProvincia(){
    
    this.defaultService.getEdificios('',this.idProvincia).subscribe(edificios =>
      this.searchResultEdificio = edificios.filter(edificio => edificio.direccion.poblacion.provincia.id === this.idProvincia)
     );
  }

  filtrarSalasPorEdificio(){
    this.defaultService.getSalas(this.idEdificio).subscribe(
      response =>{
        this.salas = response;
        console.log("this.salas: " + this.salas);
      }
    );
  }

  onCancel() {
    console.log('Botón Cancelar pulsado');    
    this.router.navigate(['reservas']);
  }
}
