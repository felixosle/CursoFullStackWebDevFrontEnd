import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { DefaultService } from '../../../api-rest/api/default.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edificio-detalle',
  templateUrl: './edificio-detalle.component.html',
  styleUrls: ['./edificio-detalle.component.css']
})
export class EdificioDetalleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any, private dialog: MatDialog, private defaultService: DefaultService, private router:Router) { }
  
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
        this.defaultService.borrarEdificio(this.datosPasados.id).subscribe();
        this.dialog.closeAll();
      } else {
        console.log("Pulsó Cancelar Borrar "+ this.datosPasados.nombre);
      }
    });
  }
}
