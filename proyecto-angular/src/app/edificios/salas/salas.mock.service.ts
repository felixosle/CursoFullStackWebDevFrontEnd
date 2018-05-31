import { Injectable } from '@angular/core';
import { TipoSala } from '../../../api-rest/';

@Injectable()

export class SalasMockService {
    private tipos: TipoSala[] = [
        {"id":1, "tipo":'Auditorio'},
        {"id":2, "tipo":'Sala de reuniones'},
        {"id":3, "tipo":'Despacho'}
    ];

    getTiposSalas(){
        return this.tipos;
    }
}