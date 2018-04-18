//Los servicios "mock" son para hacer pruebas con datos locales (cuando aún no tenemos servicios restful para probar)
import { Edificio } from '../model/edificio';

export class EdificioMockService{
    private edificios: Edificio[] = [
        {   "id": 1,
            "nombre": "EUM 1",
            "codVia": "CALLE",
            "nombreVia": "FRANCESCO SCRIMIERI",
            "numeroVia": "SN",
            "poblacion": {
                "id": 7467,
                "poblacion": "Valladolid",
                "latitud": "41.653363",
                "longitud": "-4.728874",
                "provincia": {
                    "id": 40,
                    "provincia": "Valladolid",
                    "provinciaseo":"VA"
                }
            },          
            "codPostal": "47014",
            "titularidad":"PR"
        },
        
        {   "id": 2,
            "nombre": "EUM 2",
            "codVia": "CALLE",
            "nombreVia": "RIGOBERTO CORTEJOSO",
            "numeroVia": "14",
            "poblacion": {
                "id": 7467,
                "poblacion": "Valladolid",
                "latitud": "41.653363",
                "longitud": "-4.728874",
                "provincia": {
                    "id": 40,
                    "provincia": "Valladolid",
                    "provinciaseo":"VA"
                }
            },          
            "codPostal": "47014",
            "titularidad":"PR"
        },

        {   "id": 3,
            "nombre": "PRESIDENCIA",
            "codVia": "CALLE",
            "nombreVia": "SANTIAGO ALBA",
            "numeroVia": "1",
            "poblacion": {
                "id": 7467,
                "poblacion": "Valladolid",
                "latitud": "41.653363",
                "longitud": "-4.728874",
                "provincia": {
                    "id": 40,
                    "provincia": "Valladolid",
                    "provinciaseo":"VA"
                }
            },          
            "codPostal": "47008",
            "titularidad":"PR"
        },
        {   "id": 4,
            "nombre": "HOSPITAL MILITAR",
            "codVia": "PASEO",
            "nombreVia": "ZORRILLA",
            "numeroVia": "1",
            "poblacion": {
                "id": 7467,
                "poblacion": "Valladolid",
                "latitud": "41.653363",
                "longitud": "-4.728874",
                "provincia": {
                    "id": 40,
                    "provincia": "Valladolid",
                    "provinciaseo":"VA"
                }
            },          
            "codPostal": "47008",
            "titularidad":"PR"
        },

        {   "id": 5,
            "nombre": "EDUCACION",
            "codVia": "AVENIDA",
            "nombreVia": "MONASTERIO DEL PRADO",
            "numeroVia": "SN",
            "poblacion": {
                "id": 7467,
                "poblacion": "Valladolid",
                "latitud": "41.653363",
                "longitud": "-4.728874",
                "provincia": {
                    "id": 40,
                    "provincia": "Valladolid",
                    "provinciaseo":"VA"
                }
            },          
            "codPostal": "47014",
            "titularidad":"PR"
        }
    ];
    getEdificios(){
        return this.edificios.slice();
        //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }
}