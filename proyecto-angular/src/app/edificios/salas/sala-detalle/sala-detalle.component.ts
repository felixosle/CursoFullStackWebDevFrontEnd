import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../../../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';

@Component({
  selector: 'app-sala-detalle',
  templateUrl: './sala-detalle.component.html',
  styleUrls: ['./sala-detalle.component.css']
})
export class SalaDetalleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete(element){
    console.log("Cargado Diálogo Borrando "+ this.datosPasados.nombre);
    const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: this.datosPasados
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Confirmó Borrar " + this.datosPasados.nombre);
      } else {
        console.log("Canceló Borrar "+ this.datosPasados.nombre);
      }
    });
  }
}
