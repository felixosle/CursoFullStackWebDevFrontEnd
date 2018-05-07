import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { Provincia } from '../../model/provincia';
import { ReservaMockService } from '../reserva.mock.service'

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {
  reserva: Reserva;
  provincias: Provincia []=[];
  minDate;


  constructor(private reservaMockService: ReservaMockService) { }

  ngOnInit() {
    this.provincias = this.reservaMockService.getProvincias();
    this.minDate = new Date();
  }

}
