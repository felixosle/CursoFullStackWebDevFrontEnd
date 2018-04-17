import { Edificio } from '../model/edificio';

export class EdificioMockService{
    edificios: Edificio[] = [
        {   "edificioId": 1,
            "nombre": "EUM 1",
            "titularidad": "PR",
            "direccion": {
                "tipoVia": "CALLE",
                "nombreVia": "FRANCESCO SCRIMIERI",
                "numeroVia": "SN",
                "codigoPostal": "47014",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid"
                    }
                }
            }
        },
        {
            "edificioId": 2,
            "nombre": "EUM 2",
            "titularidad": "PR",
            "direccion": {
                "tipoVia": "CALLE",
                "nombreVia": "RIGOBERTO CORTEJOSO",
                "numeroVia": "14",
                "codigoPostal": "47014",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid"
                    }
                }
            }
        },
        {
            "edificioId": 3,
            "nombre": "PRESIDENCIA",
            "titularidad": "PR",
            "direccion": {
                "tipoVia": "CALLE",
                "nombreVia": "SANTIAGO ALBA",
                "numeroVia": "1",
                "codigoPostal": "47008",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid"
                    }
                }
            }
        },
        {
            "edificioId": 4,
            "nombre": "HOSPITAL MILITAR",
            "titularidad": "PR",
            "direccion": {
                "tipoVia": "PASEO",
                "nombreVia": "ZORRILLA",
                "numeroVia": "1",
                "codigoPostal": "47007",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid"
                    }
                }
            }
        },
        {
            "edificioId": 5,
            "nombre": "EDUCACION",
            "titularidad": "PR",
            "direccion": {
                "tipoVia": "AVENIDA",
                "nombreVia": "MONASTERIO DEL PRADO",
                "numeroVia": "SN",
                "codigoPostal": "47014",
                "poblacion": {
                    "poblacionId": 7467,
                    "poblacion": "Valladolid",
                    "latitud": "41.653363",
                    "longitud": "-4.728874",
                    "provincia": {
                        "provinciaId": 40,
                        "provincia": "Valladolid"
                    }
                }
            }
        }
    ];