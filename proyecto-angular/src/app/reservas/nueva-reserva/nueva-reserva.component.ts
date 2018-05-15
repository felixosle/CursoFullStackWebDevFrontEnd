import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../api-rest/model/reserva';
import { Provincia } from '../../../api-rest/model/provincia';
import { Edificio } from '../../../api-rest/model/edificio';
import { Sala } from '../../../api-rest/model/sala';
import { EdificioMockService } from '../../edificios/edificio.mock.service'
import { DefaultService } from '../../../api-rest/api/default.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {
  reserva: Reserva;
  provincias: Provincia []=[];
  edificios: Edificio []=[];
  salas: Sala []=[];
  minDate;

  constructor(private edificioMockService: EdificioMockService, private defaultService: DefaultService) { }

  ngOnInit() {
    this.provincias = this.edificioMockService.getProvincias();
    this.minDate = new Date();
  }
  
  onSubmit(){
    console.log("Pulsado Aceptar Nueva Reserva");
    
  }
}
