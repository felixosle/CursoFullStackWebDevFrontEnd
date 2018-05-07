//Los servicios "mock" son para hacer pruebas con datos locales (cuando aún no tenemos servicios restful para probar)
import { Edificio } from '../model/edificio';
import { Sala } from '../model/sala';
import { Reserva } from '../model/reserva';

export class ReservaMockService{
  fechaHoy: Date = new Date();
  private reservas: Reserva[] = [      
    {
      "id": 1,
      "sala": {
        "id": 1,
        "nombre": "Sala 1",
        "descripcion": "Sala de reuniones nº 1",
        "capacidad": 10,
        "localizacion": "SM-15",
        "tipo": {
          "id": 1,
          "nombre": "Sala de reunión"
        },
        "edificio": {
          "id": 1,
          "nombre": "E.U.M. 1",
          "codVia": "Calle",
          "nombreVia": "FRANCESCO SCRIMIERI",
          "numeroVia": "SN",
          "poblacion": {
            "id": 7467,
            "provincia": {
              "id": 40,
              "provincia": "Valladolid"
            },
            "poblacion": "Valladolid",
            "postal": "47001",
            "latitud": "41.653363",
            "longitud": "-4.728874"
          },
          "codPostal": "47014",
          "titularidad": "PR"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "marmarma"
    },

    {
      "id": 2,
      "sala": {
        "id": 1,
        "nombre": "Sala 1",
        "descripcion": "Sala de reuniones nº 1",
        "capacidad": 10,
        "localizacion": "SM-12",
        "tipo": {
          "id": 1,
          "nombre": "Sala de reunión"
        },
        "edificio": {
          "id": 2,
          "nombre": "E.U.M. 2",
          "codVia": "Calle",
          "nombreVia": "RIGOBERTO CORTEJOSO",
          "numeroVia": "20",
          "poblacion": {
            "id": 7467,
            "provincia": {
              "id": 40,
              "provincia": "Valladolid"
            },
            "poblacion": "Valladolid",
            "postal": "47001",
            "latitud": "41.653363",
            "longitud": "-4.728874"
          },
          "codPostal": "47014",
          "titularidad": "PR"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "ferferfe"
    },

    {
      "id": 3,
      "sala": {
        "id": 2,
        "nombre": "Sala 2",
        "descripcion": "Sala de reuniones nº 2",
        "capacidad": 10,
        "localizacion": "SM-24",
        "tipo": {
          "id": 1,
          "nombre": "Sala de reunión"
        },
        "edificio": {
          "id": 2,
          "nombre": "E.U.M. 2",
          "codVia": "Calle",
          "nombreVia": "RIGOBERTO CORTEJOSO",
          "numeroVia": "20",
          "poblacion": {
            "id": 7467,
            "provincia": {
              "id": 40,
              "provincia": "Valladolid"
            },
            "poblacion": "Valladolid",
            "postal": "47001",
            "latitud": "41.653363",
            "longitud": "-4.728874"
          },
          "codPostal": "47014",
          "titularidad": "PR"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "ferferfe"
    },

    {
      "id": 4,
      "sala": {
        "id": 1,
        "nombre": "Sala 1",
        "descripcion": "Sala de reuniones nº 1",
        "capacidad": 10,
        "localizacion": "SM-04",
        "tipo": {
          "id": 1,
          "nombre": "Sala de reunión"
        },
        "edificio": {
          "id": 3,
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
                }
            },          
            "codPostal": "47008",
            "titularidad":"PR"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "ferferfe"
    }
  ];

  provincias = [
    {id: 40, provincia: 'Valladolid'},
    {id: 30, provincia: 'Palencia'},
    {id: 20, provincia: 'León'}
  ];

    getReservas(){
      return this.reservas.slice();        
      //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }

    getProvincias(){
      return this.provincias.slice();        
      //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }

    
    
}