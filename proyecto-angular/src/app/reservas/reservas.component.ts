import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  minDate;
  constructor() { }

  ngOnInit() {
    this.minDate = new Date();    
  }

    onSubmit(form: NgForm){
    console.log(form);
    }
  }
