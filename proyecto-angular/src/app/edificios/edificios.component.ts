import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EdificioMockService } from './edificio.mock.service'
import { Edificio } from '../../api-rest/model/edificio';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DialogoConfirmacionComponent } from '../comun/dialogo-confirmacion-borrar/dialogo-confirmacion-borrar.component';
import { EdificioDetalleComponent } from './edificio-detalle/edificio-detalle.component';
import { DefaultService } from '../../api-rest/api/default.service';
import { Router } from '@angular/router';

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

  constructor(private edificioMockService: EdificioMockService, private defaultService: DefaultService, private dialog: MatDialog, private router:Router) { }

  ngOnInit() {
    // this.edificios = this.edificioMockService.getEdificios();
    // this.dataSource.data = this.edificios;
    this.defaultService.getEdificio().subscribe(
      data => {
        this.dataSource.data = data;
      }
    )
    
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
    const dialogRef = this.dialog.open(EdificioDetalleComponent, {
      data: this.edificioSeleccionado
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Pulsó Aceptar cambios de edición");
        this.defaultService.actualizarEdificio(this.edificioSeleccionado.id,this.edificioSeleccionado).subscribe();
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
    console.log(this.edificioSeleccionado.id);
    this.router.navigate(['/edificios/' + this.edificioSeleccionado.id + '/salas/']);
    console.log("Viendo salas del edificio: " + this.edificioSeleccionado.nombre);
    
    
  }
}
