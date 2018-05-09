import { Component, OnInit } from '@angular/core';
import { Sala } from '../../../model/sala';
import { Edificio } from '../../../model/edificio';
import { EdificioMockService } from '../../edificio.mock.service'

@Component({
  selector: 'app-nueva-sala',
  templateUrl: './nueva-sala.component.html',
  styleUrls: ['./nueva-sala.component.css']
})
export class NuevaSalaComponent implements OnInit {
  sala: Sala;
  edificios: Edificio [];

  constructor(private edificioMockService: EdificioMockService) { }

  ngOnInit() {
    this.edificios = this.edificioMockService.getEdificios();
  }

  onSubmit(){
    console.log("Pulsado Aceptar Nueva Sala");
  }
}
