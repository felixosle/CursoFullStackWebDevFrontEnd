import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../model/edificio';
import { Provincia } from '../../model/provincia';
import { EdificioMockService } from '../edificio.mock.service'

@Component({
  selector: 'app-nuevo-edificio',
  templateUrl: './nuevo-edificio.component.html',
  styleUrls: ['./nuevo-edificio.component.css']
})
export class NuevoEdificioComponent implements OnInit {
  edificio: Edificio;
  provincias: Provincia []=[];


  constructor(private edificioMockService: EdificioMockService) { }

  ngOnInit() {
    this.provincias = this.edificioMockService.getProvincias();
  }

  onSubmit(){
    console.log("Pulsado Aceptar Nuevo Elemento");
  }
}
