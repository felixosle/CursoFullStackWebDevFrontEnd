import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialogo-edicion',
  templateUrl: './dialogo-edicion.component.html',
  styleUrls: ['./dialogo-edicion.component.css']
})
export class DialogoEdicionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datosPasados: any) { }
  
  ngOnInit() {
  }

}
