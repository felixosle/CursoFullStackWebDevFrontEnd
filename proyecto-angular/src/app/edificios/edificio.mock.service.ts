//Los servicios "mock" son para hacer pruebas con datos locales (cuando aún no tenemos servicios restful para probar)
import { Edificio } from '../model/edificio';
import { Sala } from '../model/sala';

export class EdificioMockService{
    private edificios: Edificio[] = [
        {   "edificioId": 1,
            "nombre": "EUM 1",
            "direccion": {
                "tipoVia": "CALLE",
                "nombreVia": "FRANCESCO SCRIMIERI",
                "numeroVia": "SN",
                "codigoPostal": "47014",
                "poblacion": {
                    "poblacionId": 7467,
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid"
                    },
                    "poblacion": "Valladolid",
                    "postal": "47001",
                    "latitud": "41.653363",
                    "longitud": "-4.728874"                    
                },
            },
                "titularidad":"PR"
        },
        
        {   "edificioId": 2,
            "nombre": "EUM 2",
            "direccion": {
                "tipoVia": "CALLE",
                "nombreVia": "RIGOBERTO CORTEJOSO",
                "numeroVia": "14",
                "codigoPostal": "47014",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid",
                    },                    
                    "postal": "47001",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",                    
                },
            },
            "titularidad":"PR"
        },

        {   "edificioId": 3,
            "nombre": "PRESIDENCIA",
            "direccion": {
                "tipoVia": "CALLE",
                "nombreVia": "SANTIAGO ALBA",
                "numeroVia": "1",
                "codigoPostal": "47008",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid",
                    },
                    "postal": "47001",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                },                
            },
            "titularidad":"PR"
        },
        
        {   "edificioId": 4,
            "nombre": "HOSPITAL MILITAR",
            "direccion": {
                "tipoVia": "PASEO",
                "nombreVia": "ZORRILLA",
                "numeroVia": "1",
                "codigoPostal": "47008",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid",
                    },
                    "postal": "47008",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                },
            },
            "titularidad":"PR"
        },

        {   "edificioId": 5,
            "nombre": "EDUCACION",
            "direccion": {
                "tipoVia": "AVENIDA",
                "nombreVia": "MONASTERIO DEL PRADO",
                "numeroVia": "SN",
                "codigoPostal": "47014",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid",
                    },
                    "postal": "47014",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                },
            },
            "titularidad":"PR"
        }
    ];

    private salas: Sala[] = [
        {
            "salaId": 1,
            "nombre": "Sala 1",
            "descripcion": "Sala de reuniones nº 1",
            "capacidad": 20,
            "localizacion": "SM-25",
            "tipoSala": {
                "tipoSalaId": 1,
                "tipo": "Sala de reunión"            
            },
        "edificio": {
            "edificioId": 1,
            "nombre": "E.U.M. I"            
            }
        }, 
        
        {
            "salaId": 2,
            "nombre": "Sala 2",
            "descripcion": "Sala de reuniones nº 2",
            "capacidad": 10,
            "localizacion": "SM-30",
            "tipoSala": {
                "tipoSalaId": 1,
                "tipo": "Sala de reunión"            
            },
            "edificio": {
            "edificioId": 1,
            "nombre": "E.U.M. I"            
            }
        },

        {
            "salaId": 3,
            "nombre": "Sala 3",
            "descripcion": "Sala de reuniones nº 3",
            "capacidad": 15,
            "localizacion": "SM-15",
            "tipoSala": {
                "tipoSalaId": 1,
                "tipo": "Sala de reunión"                
            },
        "edificio": {
            "edificioId": 2,
            "nombre": "E.U.M. II"            
            }
        }
    ];

    provincias = [
        {provinciaId: 40, provincia: 'Valladolid'},
        {provinciaId: 30, provincia: 'Palencia'},
        {provinciaId: 20, provincia: 'León'},
        {provinciaId: 10, provincia: 'Zamora'}
      ];

    getEdificios(){
        return this.edificios.slice();
        //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }

    getSalas(){
        return this.salas.slice();
        //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }

    getProvincias(){
        return this.provincias.slice();        
        //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
      }
}