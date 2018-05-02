import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sala-detalle',
  templateUrl: './sala-detalle.component.html',
  styleUrls: ['./sala-detalle.component.css']
})
export class SalaDetalleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any) { }

  ngOnInit() {
  }

}
