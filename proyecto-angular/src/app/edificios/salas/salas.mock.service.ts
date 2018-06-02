import { Injectable } from '@angular/core';
import { TipoSala } from '../../../api-rest/';
// Práctica Observable:
// Alguien debería importar Observable de rxjs aquí:


@Injectable()

export class SalasMockService {
    private tipos: TipoSala[] = [
        {"id":1, "tipo":'Auditorio'},
        {"id":2,"tipo":'Sala de reuniones'},
        {"id":3,"tipo":'Despacho'}
    ];

    getTiposSalas(){        
        // Práctica Observable:
        // Alguien debería devolver un Observable.of con los tipos:
        
    }
}