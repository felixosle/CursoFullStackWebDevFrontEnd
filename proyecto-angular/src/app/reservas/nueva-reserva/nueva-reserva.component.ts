import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { Provincia } from '../../model/provincia';
import { EdificioMockService } from '../../edificios/edificio.mock.service'

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {
  reserva: Reserva;
  provincias: Provincia []=[];
  minDate;


  constructor(private edificioMockService: EdificioMockService) { }

  ngOnInit() {
    this.provincias = this.edificioMockService.getProvincias();
    this.minDate = new Date();
  }

}
