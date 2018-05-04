import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialogo-confirmacion-borrar',
  templateUrl: './dialogo-confirmacion-borrar.component.html',
  styleUrls: ['./dialogo-confirmacion-borrar.component.css']
})
export class DialogoConfirmacionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any) { }

  ngOnInit() {
  }

}
