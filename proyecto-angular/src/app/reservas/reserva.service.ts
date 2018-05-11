import { Injectable } from '@angular/core';
import { Reserva } from '../../api-rest/model/reserva';
import { DefaultService } from '../../api-rest/api/default.service';

@Injectable()
export class ReservaService{
    fechaHoy: Date = new Date();
    private reservas: Reserva[] = [];

    constructor(private defaultService: DefaultService) {}

    getReservas(){
        console.log("Llamando al servicio ping: ");
        console.log(this.defaultService.pingGet());
        this.defaultService.getReservas()
        .subscribe( data =>  this.reservas = data);
        console.log(this.reservas);
        // return this.reservas.slice();
        //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }

}