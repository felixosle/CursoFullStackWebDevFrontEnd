import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EdificioMockService } from './edificio.mock.service'
import { Edificio } from '../model/edificio';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styleUrls: ['./edificios.component.css']
})
export class EdificiosComponent implements OnInit, AfterViewInit {
  edificios: Edificio []=[];
  displayedColumns = ['nombre', 'codPostal', 'titularidad', 'poblacion'];
  dataSource = new MatTableDataSource<Edificio>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginador:MatPaginator;

  constructor(private edificioMockService: EdificioMockService) { }

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
}
