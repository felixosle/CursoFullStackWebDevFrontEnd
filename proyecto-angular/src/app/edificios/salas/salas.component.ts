import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EdificioMockService } from '../edificio.mock.service'
import { Sala } from '../../model/sala';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { SalaDetalleComponent } from './sala-detalle/sala-detalle.component';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit, AfterViewInit {

  salas: Sala []=[];
  salaSeleccionada: Sala=null;
  displayedColumns = ['nombre', 'descripcion', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Sala>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginador:MatPaginator;

  constructor(private edificioMockService: EdificioMockService, private dialog: MatDialog) { }

  ngOnInit() {
    this.salas = this.edificioMockService.getSalas();
    this.dataSource.data = this.salas;
    this.paginador._intl.itemsPerPageLabel = 'Registros por página';
    this.paginador._intl.nextPageLabel = 'Siguiente';
    this.paginador._intl.previousPageLabel = 'Anterior';
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginador;
  }

  filtrar(valorFiltro: string){
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

  onEdit(element){
    this.salaSeleccionada = element;
    console.log("Editando elemento " + this.salaSeleccionada.nombre );
    const dialogRef = this.dialog.open(SalaDetalleComponent, {
      data: this.salaSeleccionada
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar");
      } else {
        console.log("Pulsó Cancelar");
      }
    });
  }

  onDelete(element){
    this.salaSeleccionada = element;
    console.log("Borrando elemento " + this.salaSeleccionada.nombre);
    const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: this.salaSeleccionada
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar");
      } else {
        console.log("Pulsó Cancelar");
      }
    });
  }
  
}
