import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { DefaultService } from '../../../api-rest/api/default.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-detalle',
  templateUrl: './reserva-detalle.component.html',
  styleUrls: ['./reserva-detalle.component.css']
})
export class ReservaDetalleComponent implements OnInit {
  minDate;

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any, private dialog: MatDialog, private defaultService: DefaultService, private router:Router) { }

  ngOnInit() {
    this.minDate = new Date();
  }

  onDelete(element){
    console.log("Borrando elemento " + this.datosPasados.id);
    const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: this.datosPasados
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar Borrar " + this.datosPasados.id);
        this.defaultService.borrarReservaPorID(this.datosPasados.id).subscribe();
        this.dialog.closeAll();
        this.refresh();
      } else {
        console.log("Pulsó Cancelar Borrar "+ this.datosPasados.id);
      }
    });
  }

  refresh(){
    // window.location.reload();
  }

}
