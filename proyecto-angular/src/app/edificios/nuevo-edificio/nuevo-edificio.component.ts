import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../../api-rest';
import { Provincia } from '../../../api-rest';
import { Poblacion } from '../../../api-rest';
import { EdificioMockService } from '../edificio.mock.service';
import { DefaultService } from '../../../api-rest/api/default.service';
import { NgForm,FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-nuevo-edificio',
  templateUrl: './nuevo-edificio.component.html',
  styleUrls: ['./nuevo-edificio.component.css']
})

export class NuevoEdificioComponent {
  searchTermProvincia : FormControl = new FormControl();
  searchTermPoblacion : FormControl = new FormControl();

  searchResultProvincia: Provincia[] = [];
  searchResultPoblacion: Poblacion[] = [];

  idProvincia: number = 1;
  edificio: Edificio;
  poblacion: Poblacion;
  provinciaSeleccionada: Provincia= null;

  constructor(private defaultService: DefaultService, private router: Router){
    this.searchTermProvincia.valueChanges      
      .debounceTime(400)  
      .subscribe(data => {
          this.defaultService.getProvincias(data).subscribe(response =>{
            console.log(response);
            this.searchResultProvincia = response
          })
      })
    this.searchTermPoblacion.valueChanges      
    .debounceTime(400)  
    .subscribe(data2 => {
        this.defaultService.getPoblaciones(this.idProvincia,data2).subscribe(response =>{
          console.log(response);
          this.searchResultPoblacion = response
        })
    })
  }
  
  onSubmit(form: NgForm){
    this.edificio = {id: null, nombre:form.value.nombre, direccion:{ tipoVia: form.value.tipoVia, nombreVia: form.value.nombreVia, numeroVia:form.value.numeroVia, codigoPostal: form.value.codigoPostal, poblacion:{id: form.value.poblacion.id, poblacion:form.value.poblacion.poblacion}}, titularidad:form.value.titularidad };
    console.log("Pulsado Aceptar Nuevo Edificio. Edificio.id: " + this.edificio.id + " " + this.edificio.nombre + " ");
    this.defaultService.agregarEdificio(this.edificio).subscribe();
    this.router.navigate(['edificios']);
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
}
// export class NuevoEdificioComponent implements OnInit {
  // private edificio: Edificio;
  // private provinciasRecuperadas: Provincia []=[];
  // provincias: Observable<any[]>;

  // //Filtro de provincias:
  // provinciasCtrl= new FormControl();
  // provinciasFiltradas: Observable<any[]>;
  
  // constructor(private edificioMockService: EdificioMockService, private defaultService: DefaultService, private router: Router) { 
  //   this.defaultService.getProvincias().subscribe(
  //     data => {
  //       this.provinciasRecuperadas = data;
  //     }
  //   )

  //   this.provinciasFiltradas = this.provinciasCtrl.valueChanges
  //   .startWith(null)
  //   .debounceTime(200)
  //   .distinctUntilChanged()
  //   .switchMap(val => {
  //     return this.filter(val || '')
  // }) 
  // }

  // filter(val: string) {
  //   return this.provincias
  //     .map(response => response.filter(option => { 
  //       return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
  //     }));
  // }

//   ngOnInit() {
//     this.provincias = this.edificioMockService.getProvincias();
    
//   }

//   onSubmit(form: NgForm){
//     this.edificio = {id: null, nombre:form.value.nombre, direccion:{ tipoVia: form.value.tipoVia, nombreVia: form.value.nombreVia, numeroVia:form.value.numeroVia, codigoPostal: form.value.codigoPostal, poblacion:{id:null, poblacion:form.value.poblacion}}, titularidad:form.value.titularidad };
//     console.log("Pulsado Aceptar Nuevo Edificio. Edificio.id: " + this.edificio.id + " " + this.edificio.nombre + " ");
//     this.defaultService.agregarEdificio(this.edificio).subscribe();
//     this.router.navigate(['edificios']);
//     this.refresh();
//   }

//   refresh(){
//     window.location.reload();
//   }
// }
