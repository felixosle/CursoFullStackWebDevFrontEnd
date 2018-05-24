import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../../api-rest';
import { Provincia } from '../../../api-rest';
import { Poblacion } from '../../../api-rest';
import { EdificioMockService } from '../edificio.mock.service';
import { DefaultService } from '../../../api-rest';
import { NgForm,FormControl } from '@angular/forms';
import {Router} from "@angular/router";
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

  private idProvincia: number = 0;
  private idPoblacion: number= 0;
  private nombrePoblacion: string= "";
  private edificio: Edificio;
  private poblacion: Poblacion;
  private provinciaSeleccionada: Provincia= null;

  constructor(private defaultService: DefaultService, private router: Router) {
    this.searchTermProvincia.valueChanges      
      .debounceTime(400)  
      .subscribe(data => {
          this.defaultService.getProvincias(data).subscribe(
            response =>{
            this.searchResultProvincia = response;
            this.idProvincia = this.searchResultProvincia[0].id;
            this.filtrarPoblacionesPorProvincia();
            console.log("this.idProvincia: " + this.idProvincia);
          })
      })
    this.searchTermPoblacion.valueChanges
    .debounceTime(400)  
    .subscribe(data2 => {
        this.defaultService.getPoblaciones(this.idProvincia,data2).subscribe(
          response =>{
          console.log(response);
          this.searchResultPoblacion = response;
          this.idPoblacion = this.searchResultPoblacion[0].id;
          this.nombrePoblacion = this.searchResultPoblacion[0].poblacion;
          console.log("this.idPoblacion: " + this.idPoblacion);
        })
    })
  }
  
  onSubmit(form: NgForm){
    console.log(form.value.nombre, form.value.tipoVia, form.value.nombreVia, form.value.numeroVia, form.value.codigoPostal, form.value.titularidad, form.value.poblacion);
    // , form.value.poblacion.id, form.value.poblacion.poblacion  );
    this.edificio = {nombre:form.value.nombre, direccion:{ tipoVia: form.value.tipoVia, nombreVia: form.value.nombreVia, numeroVia:form.value.numeroVia, codigoPostal: form.value.codigoPostal, poblacion:{id: this.idPoblacion, poblacion: this.nombrePoblacion}}, titularidad:form.value.titularidad };
    console.log("Pulsado Aceptar Nuevo Edificio. Edificio.id: " + this.edificio.id + " " + this.edificio.nombre + " ");
    this.defaultService.agregarEdificio(this.edificio).subscribe();
    // this.refresh();
    this.router.navigate(['edificios']);
  }

  filtrarPoblacionesPorProvincia(){
    this.defaultService.getPoblaciones(this.idProvincia).subscribe(response =>{
      console.log(response);
      this.searchResultPoblacion = response
    })
  }



  // seleccionarProvincia(idProvincia){
  //   this.idProvincia = idProvincia;
  //   console.log(idProvincia);
  //   this.defaultService.getPoblaciones(this.idProvincia).subscribe(response =>{
  //     console.log("Llamado seleccionarProvincia. Respuesta: " + response);
  //     this.searchResultPoblacion = response
  //   })
  // }

  refresh(){
    // window.location.reload();
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
