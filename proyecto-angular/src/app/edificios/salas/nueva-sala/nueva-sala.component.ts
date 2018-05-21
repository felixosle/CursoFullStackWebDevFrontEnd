import { Component, OnInit } from '@angular/core';
import { Sala } from '../../../../api-rest';
import { Edificio } from '../../../../api-rest';
import { EdificioMockService } from '../../edificio.mock.service'
import { ActivatedRoute } from '@angular/router';
// Librerías para formularios reactivos:
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-sala',
  templateUrl: './nueva-sala.component.html',
  styleUrls: ['./nueva-sala.component.css']
})
export class NuevaSalaComponent implements OnInit {
  sala: Sala;
  idEdificio: number;  
  salaForm: FormGroup;
  errorMessage: string;

  constructor(private edificioMockService: EdificioMockService,private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idEdificio = this.route.snapshot.params['idEdificio'];    
    this.createForm();
  }

  onSubmit(){
    console.log('Formulario Nueva Sala enviado: ' + this.salaForm.value);
  }

  onCancel() {
    console.log('Botón Cancelar Nueva sala pulsado');
    this.salaForm.reset();
  }

  onClean() {
    console.log('Botón Limpiar pulsado');
    this.salaForm.reset();
    this.ngOnInit();
  }

  createForm() {
    const formatoCapacidad = '[1-9]+[0-9]+[0-9]*$'
    this.salaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['', Validators.maxLength(50)],
      capacidad: ['',[Validators.maxLength(3), Validators.pattern(formatoCapacidad)]],
      tipoSala: ['',],
      localizacion:  ['', Validators.maxLength(50)]
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
      'maxlength': 'Capacidad no puede tener más de 3 números',
      'pattern': 'Capacidad sólo admite números',
    },
    'tipoSala': {
      'pattern': ''
    },
    'localizacion': {
      'maxlength': 'La localización no puede tener más de 50 caracteres',
    }
  };

}
