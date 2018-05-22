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
  private provincias: Provincia []=[];
  private edificios: Edificio []=[];
  private salas: Sala []=[];
  private minDate;

  searchTermProvincia : FormControl = new FormControl();
  searchTermEdificio : FormControl = new FormControl();
  searchResultProvincia: Provincia[] = [];
  searchResultEdificio: Edificio[] = [];

  private nombreProvincia: string = "";
  private nombreEdificio: string = "";
  private idEdificio: number = 0;

  constructor(private defaultService: DefaultService, private router: Router) { 
    this.searchTermProvincia.valueChanges
    .debounceTime(400)
    .subscribe(data => {
      this.defaultService.getProvincias(data).subscribe(
        response =>{
        this.searchResultProvincia = response;
        this.nombreProvincia = this.searchResultProvincia[0].provincia;
        this.filtrarEdificios();
        console.log("this.nombreProvincia: " + this.nombreProvincia);
        }
      );
    })

    this.searchTermEdificio.valueChanges
    .debounceTime(400)  
    .subscribe(data2 => {
        this.defaultService.getEdificio(data2).subscribe(
          response =>{
          console.log(response);
          this.searchResultEdificio = response;
          this.idEdificio = this.searchResultEdificio[0].id;
          this.nombreEdificio = this.searchResultEdificio[0].nombre;
          console.log("this.nombreEdificio: " + this.nombreEdificio);
        })
    })
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
    

    this.defaultService.getSalas(1).subscribe(
      data => {
        this.salas = data;
      }
    );
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

  filtrarEdificios(){
    this.defaultService.getEdificio(this.nombreProvincia).subscribe(response =>{
      console.log(response);
      this.searchResultEdificio = response;
    })
  }

  refresh(){    
    // window.location.reload();
  }
}
