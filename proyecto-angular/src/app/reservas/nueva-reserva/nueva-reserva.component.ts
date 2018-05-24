import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../api-rest/';
import { Provincia } from '../../../api-rest/';
import { Edificio } from '../../../api-rest/';
import { Sala } from '../../../api-rest/';
// import { EdificioMockService } from '../../edificios/edificio.mock.service'
import { DefaultService } from '../../../api-rest/api/default.service';
import { NgForm, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import 'rxjs/add/operator/debounceTime';

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

  constructor(private defaultService: DefaultService, private router: Router) { 
    
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
    this.router.navigate(['reservas']);
    this.refresh();
  }

  filtrarEdificiosPorProvincia(){
    this.edificios= [];
    this.defaultService.getEdificios('',this.idProvincia).subscribe(response =>{
      response.forEach( (edificio) => {
        if (edificio.direccion.poblacion.provincia.id === this.idProvincia){
          this.edificios.push(edificio);
          this.idEdificio=this.edificios[0].id;
        }
      }
     )
     this.searchResultEdificio=this.edificios;
    });
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

  refresh(){    
    // window.location.reload();
  }
}
