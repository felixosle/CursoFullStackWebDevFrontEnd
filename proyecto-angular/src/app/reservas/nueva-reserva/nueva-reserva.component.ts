import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../api-rest/model/reserva';
import { Provincia } from '../../../api-rest/model/provincia';
import { Edificio } from '../../../api-rest/model/edificio';
import { Sala } from '../../../api-rest/model/sala';
import { EdificioMockService } from '../../edificios/edificio.mock.service'
import { DefaultService } from '../../../api-rest/api/default.service';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

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

  constructor(private edificioMockService: EdificioMockService, private defaultService: DefaultService, private router: Router) { }

  ngOnInit() {
    this.provincias = this.edificioMockService.getProvincias();
    this.minDate = new Date(); //La fecha mínima a elegir es hoy
    this.defaultService.getEdificio().subscribe(
        data => {
          this.edificios = data;
        }
      );

    this.defaultService.getSalas(1).subscribe(
      data => {
        this.salas = data;
      }
    );
  }
  
  onSubmit(form: NgForm){
    this.reserva = {id: null, sala:{ id:form.value.sala, nombre:"" } , fechaReserva: form.value.fechaReserva, usuario: form.value.usuario};
    console.log ("reserva.sala.id: " + this.reserva.sala.id + " " + this.reserva.sala.nombre + " " + this.reserva.usuario);
    console.log("Pulsado Aceptar Nueva Reserva. form.value.sala: " + form.value.sala + " Fecha: " + form.value.fechaReserva + " " );

    this.defaultService.agregarReserva(this.reserva).subscribe();
    this.router.navigate(['reservas']);
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
}
