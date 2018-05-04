import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';

@Component({
  selector: 'app-dialogo-edicion',
  templateUrl: './dialogo-edicion.component.html',
  styleUrls: ['./dialogo-edicion.component.css']
})
export class DialogoEdicionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any, private dialog: MatDialog) { }
  
  ngOnInit() {
  }

  onDelete(element){
    console.log("Borrando elemento " + this.datosPasados.nombre);
    const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: this.datosPasados
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar Borrar " + this.datosPasados.nombre);
      } else {
        console.log("Pulsó Cancelar Borrar "+ this.datosPasados.nombre);
      }
    });
  }
}
