import { Injectable } from '@angular/core';
import { TipoSala } from '../../../api-rest/';
// Práctica Observable:
// Alguien debería importar Observable de rxjs aquí:
import {Observable} from 'rxjs';

@Injectable()

export class SalasMockService {
    private tipos: TipoSala[] = [
        {"id":1, "tipo":'Auditorio'},
        {"id":2,"tipo":'Sala de reuniones'},
        {"id":3,"tipo":'Despacho'}
    ];

    getTiposSalas(){
        // Utilizamos Observable.of porque ya tenemos los datos y su tipo, y delay para simular el retraso de enviar datos por red
        // Práctica Observable:
        // Alguien debería devolver un Observable.of con los tipos:
        return Observable.of(this.tipos).delay(2000);
    }
}