import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../../../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { DefaultService } from '../../../../api-rest/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-detalle',
  templateUrl: './sala-detalle.component.html',
  styleUrls: ['./sala-detalle.component.css']
})
export class SalaDetalleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any, private dialog: MatDialog, private defaultService: DefaultService, private router:Router) { }

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
        this.defaultService.borrarSala(this.datosPasados.edificio.id, this.datosPasados.id).subscribe();
        this.dialog.closeAll();
        this.router.navigate(['/edificios/']);
      } else {
        console.log("Canceló Borrar "+ this.datosPasados.nombre);
      }
    });
  }
}
