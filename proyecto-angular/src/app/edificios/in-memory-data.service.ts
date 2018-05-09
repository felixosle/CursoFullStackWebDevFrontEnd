import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/lib/locales/es'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const oneHost = () => {
        return {
            edificioId: faker.random.uuid(),
            nombre: faker.random.name(),
            direccion: faker.internet.address(),
            description: faker.lorem.sentence(),
            readyDate: faker.date.future(),
            domain: faker.internet.domainName()
        };
    };
    
    const manyHosts = (count = faker.random.numer(100)) => {
        const res = [];
        for (let i = 0; i < count; i++) {
            res.push(oneHost());
        }
        return res;
    };
    const edificios = [
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
    }
    ];
    return { edificios };
  }
}