import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EdificioMockService } from './edificio.mock.service'
import { Edificio } from '../model/edificio';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { DialogoEdicionComponent } from './dialogo-edicion/dialogo-edicion.component';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styleUrls: ['./edificios.component.css']
})
export class EdificiosComponent implements OnInit, AfterViewInit {
  edificios: Edificio []=[];
  edificioSeleccionado: Edificio=null;
  displayedColumns = ['nombre', 'poblacion', 'codPostal', 'verSalas', 'titularidad', 'editar'];
  dataSource = new MatTableDataSource<Edificio>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginador:MatPaginator;

  constructor(private edificioMockService: EdificioMockService, private dialog: MatDialog) { }

  ngOnInit() {
    this.edificios = this.edificioMockService.getEdificios();
    this.dataSource.data = this.edificios;
    this.paginador._intl.itemsPerPageLabel = 'Registros por página';
    this.paginador._intl.nextPageLabel = 'Siguiente';
    this.paginador._intl.previousPageLabel = 'Anterior';
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginador;
  }

  onSubmit(form: NgForm){
    console.log(form);    
  }

  filtrar(valorFiltro: string){
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

  onEdit(element){
    this.edificioSeleccionado = element;
    console.log("Editando elemento " + this.edificioSeleccionado.nombre );
    const dialogRef = this.dialog.open(DialogoEdicionComponent, {
      data: this.edificioSeleccionado
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar cambios de edición");
      } else {
        console.log("Pulsó Cancelar cambios de edición");
      }
    });
  }

  // El método onDelete no es visible actualmente, está como ejemplo de borrado desde la tabla
  // para hacerlo visible, habría que incluir la columna , 'borrar' en displayedColumns (unas líneas más arriba)
  onDelete(element){
    this.edificioSeleccionado = element;
    console.log("Borrando elemento " + this.edificioSeleccionado.nombre);
    const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: this.edificioSeleccionado
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar " + this.edificioSeleccionado.nombre);
      } else {
        console.log("Pulsó Cancelar " + this.edificioSeleccionado.nombre);
      }
    });
  }

  onVerSalas(element){
    this.edificioSeleccionado = element;
    console.log("Viendo salas elemento " + this.edificioSeleccionado.nombre);
    
    
  }
}
