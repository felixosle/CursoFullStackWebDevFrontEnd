import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../../../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
// Práctica 4.6: Usar API Swagger: Update
// Alguien debería importar el servicio DefaultService:

import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-detalle',
  templateUrl: './sala-detalle.component.html',
  styleUrls: ['./sala-detalle.component.css']
})
export class SalaDetalleComponent implements OnInit {
  // Práctica 4.6: Usar API Swagger: Update
  // Alguien debería instanciar un servicio de tipo DefaultService:
  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any, private dialog: MatDialog,             private router:Router) { }

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
        // Práctica 4.6: Usar API Swagger: Update
        // Alguien debería suscribirse al método que borra edificios pasádole los argumentos necesarios:
        
        this.dialog.closeAll();
        this.router.navigate(['/edificios/']);
      } else {
        console.log("Canceló Borrar "+ this.datosPasados.nombre);
      }
    });
  }
}
