// Ejemplo de Formulario Angular Reactivo (Reactive Form)
import { Component, OnInit } from '@angular/core';
import { Sala } from '../../../../api-rest';
import { TipoSala } from '../../../../api-rest/';
import { DefaultService } from '../../../../api-rest';
import { SalasMockService } from '../../../edificios/salas/salas.mock.service';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from "@angular/router";
// Librerías para formularios reactivos:
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nueva-sala',
  templateUrl: './nueva-sala.component.html',
  styleUrls: ['./nueva-sala.component.css']
})
export class NuevaSalaComponent implements OnInit {
  sala = {} as Sala;
  tiposSalas: TipoSala[] = [];
  idEdificio: number;  
  private salaForm: FormGroup;
  errorMessage: string;

  constructor(private salasMockService: SalasMockService, private defaultService: DefaultService,private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { 
    this.salasMockService.getTiposSalas().subscribe(
      response => {
        this.tiposSalas = response;
      }
    );
  }

  ngOnInit() {
    this.idEdificio = this.route.snapshot.params['idEdificio'];
    this.createForm();
  }

  onSubmit(){
    console.log(this.salaForm.value.nombre + this.salaForm.value.tipoSala.tipo);
    this.sala ={ nombre: this.salaForm.value.nombre, descripcion: this.salaForm.value.descripcion, capacidad: this.salaForm.value.capacidad, localizacion: this.salaForm.value.localizacion , tipoSala: {id: this.salaForm.value.tipoSala.id, tipo: this.salaForm.value.tipoSala.tipo}, edificio: {id: this.salaForm.value.edificio.id, nombre: this.salaForm.value.edificio.nombre} };
    // console.log('idEdificio: ' + this.sala.edificio.id + 'Formulario Nueva Sala enviado: ' + this.salaForm.value.toJson);
    this.defaultService.agregarSala(this.idEdificio, this.sala).subscribe();
    let snackBarRef = this.snackBar.open('Sala: ' + this.salaForm.value.nombre + ' creada correctamente', null, {
      duration:3000
    });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('La snackbar se ha cerrado');
      this.router.navigate(['edificios/' + this.idEdificio + '/salas']);
    });
  }

  onCancel() {
    console.log('Botón Cancelar Nueva sala pulsado');
    this.salaForm.reset();
    this.router.navigate(['edificios/' + this.idEdificio + '/salas']);
  }

  createForm() {
    const formatoCapacidad = '[1-9]+[0-9]*$'
    this.salaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['', Validators.maxLength(50)],
      capacidad: ['',[Validators.maxLength(2), Validators.pattern(formatoCapacidad)]],
      localizacion:  ['', Validators.maxLength(50)],
      tipoSala: this.fb.group({
        id:['', Validators.required],
        tipo:['']
      }),
      edificio: this.fb.group({
        id:[this.idEdificio],
        nombre:['xxx']
      })      
    });
    this.salaForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.salaForm) { return; }
    const form = this.salaForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'nombre': '',
    'descripcion': '',
    'capacidad': '',
    'tipoSala': '',
    'localizacion': ''
  };

  validationMessages = {
    'nombre': {
      'required': 'Nombre es obligatorio',
      'minlength': 'Nombre debe tener mínimo 4 letras',
    },
    'descripcion': {
      'maxlength': 'La descripción no puede tener más de 50 caracteres',
    },
    'capacidad': {
      'maxlength': 'Capacidad no puede tener más de 2 números',
      'pattern': 'Capacidad sólo admite números',
    },    
    'localizacion': {
      'maxlength': 'La localización no puede tener más de 50 caracteres',
    }
  };

}
