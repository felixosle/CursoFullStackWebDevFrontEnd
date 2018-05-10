import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Reserva } from '../model/reserva';
import { ReservaDetalleComponent } from './reserva-detalle/reserva-detalle.component';
import { ReservaMockService } from './reserva.mock.service'
import { DialogoConfirmacionComponent } from '../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { DefaultService } from '../api/default.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit, AfterViewInit {  
  reservas: Reserva [] = [];
  reservaSeleccionada: Reserva = null;
  displayedColumns = ['id', 'sala', 'edificio', 'fecha', 'usuario', 'editar'];
  dataSource = new ReservasDataSource(this.defaultService);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginador:MatPaginator;

  constructor(private reservaMockService: ReservaMockService, private defaultService: DefaultService, private dialog: MatDialog) { }

  ngAfterViewInit(){
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginador;
  }

  ngOnInit() {
    this.reservas = this.reservaMockService.getReservas();
    this.paginador._intl.itemsPerPageLabel = 'Registros por página';
    this.paginador._intl.nextPageLabel = 'Siguiente';
    this.paginador._intl.previousPageLabel = 'Anterior';
  }

  onSubmit(form: NgForm){
  console.log(form);
  }

  filtrar(valorFiltro: string){
    // this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

  onEdit(element){
    this.reservaSeleccionada = element;
    console.log("Editando la reserva: " + this.reservaSeleccionada.id );
    const dialogRef = this.dialog.open(ReservaDetalleComponent, {
      data: this.reservaSeleccionada
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar cambios de edición");
      } else {
        console.log("Pulsó Cancelar cambios de edición");
      }
    });
  }
}

export class ReservasDataSource extends DataSource<any> {
  constructor(private defaultService: DefaultService) {
    super();
  }
  connect(): Observable<Reserva[]> {
    return this.defaultService.getReservas();
  }
  disconnect() {}
}