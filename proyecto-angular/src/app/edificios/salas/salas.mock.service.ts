import { Injectable } from '@angular/core';
import { TipoSala } from '../../../api-rest/';
import {Observable} from 'rxjs';

@Injectable()

export class SalasMockService {
    private tipos: TipoSala[] = [
        {"id":1, "tipo":'Auditorio'},
        {"id":2,"tipo":'Sala de reuniones'},
        {"id":3,"tipo":'Despacho'}
    ];

    getTiposSalas(){
        // Utilizamos Observable.of porque ya tenemos el tipo de datos y los datos
        
        return Observable.of(this.tipos).delay(2000);
    }
}