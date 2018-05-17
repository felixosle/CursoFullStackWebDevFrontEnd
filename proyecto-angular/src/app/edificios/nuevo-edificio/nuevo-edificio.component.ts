import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../../api-rest/model/edificio';
import { Provincia } from '../../../api-rest/model/provincia';
import { EdificioMockService } from '../edificio.mock.service';
import { DefaultService } from '../../../api-rest/api/default.service';
import { NgForm,FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-nuevo-edificio',
  templateUrl: './nuevo-edificio.component.html',
  styleUrls: ['./nuevo-edificio.component.css']
})
export class NuevoEdificioComponent implements OnInit {
  private edificio: Edificio;
  private provinciasRecuperadas: Provincia []=[];
  provincias: Observable<any[]>;

  //Filtro de provincias:
  provinciasCtrl= new FormControl();
  provinciasFiltradas: Observable<any[]>;
  
  constructor(private edificioMockService: EdificioMockService, private defaultService: DefaultService, private router: Router) { 
    this.defaultService.getProvincias().subscribe(
      data => {
        this.provinciasRecuperadas = data;
      }
    )

    this.provinciasFiltradas = this.provinciasCtrl.valueChanges
    .startWith(null)
    .debounceTime(200)
    .distinctUntilChanged()
    .switchMap(val => {
      return this.filter(val || '')
  }) 
  }

  filter(val: string) {
    return this.provincias
      .map(response => response.filter(option => { 
        return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
      }));
  }

  ngOnInit() {
    // this.provincias = this.edificioMockService.getProvincias();
    
  }

  onSubmit(form: NgForm){
    this.edificio = {id: null, nombre:form.value.nombre, direccion:{ tipoVia: form.value.tipoVia, nombreVia: form.value.nombreVia, numeroVia:form.value.numeroVia, codigoPostal: form.value.codigoPostal, poblacion:{id:null, poblacion:form.value.poblacion}}, titularidad:form.value.titularidad };
    console.log("Pulsado Aceptar Nuevo Edificio. Edificio.id: " + this.edificio.id + " " + this.edificio.nombre + " ");
    this.defaultService.agregarEdificio(this.edificio).subscribe();
    this.router.navigate(['edificios']);
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
}
