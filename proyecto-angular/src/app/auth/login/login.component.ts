import { Component, OnInit } from '@angular/core';
// Practica form:
// Alguien debería importar un módulo para formularios Angular aquí:
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);    
  }
}
