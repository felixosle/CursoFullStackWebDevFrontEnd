//Los servicios "mock" son para hacer pruebas con datos locales (cuando aún no tenemos servicios restful para probar)
import { Edificio } from '../model/edificio';
import { Sala } from '../model/sala';
import { Reserva } from '../model/reserva';

export class ReservaMockService{
  fechaHoy: Date = new Date();
  private reservas: Reserva[] = [      
    {
      "reservaId": 1,
      "sala": {
        "salaId": 1,
        "nombre": "Sala 1",
        "edificio": {
          "edificioId": 1,
          "nombre": "E.U.M. I"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "marmarma"
    },

    {
      "reservaId": 2,
      "sala": {
        "salaId": 2,
        "nombre": "Sala 2",
        "edificio": {
          "edificioId": 1,
          "nombre": "E.U.M. I"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "martintin"
    },

    {
      "reservaId": 3,
      "sala": {
        "salaId": 1,
        "nombre": "Sala 1",
        "edificio": {
          "edificioId": 1,
          "nombre": "E.U.M. I"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "ferferfe"
    },

    {
      "reservaId": 4,
      "sala": {
        "salaId": 3,
        "nombre": "Sala 3",
        "edificio": {
          "edificioId": 3,
          "nombre": "E.U.M. II"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "gomferma"
    },

    {
      "reservaId": 5,
      "sala": {
        "salaId": 3,
        "nombre": "Sala 3",
        "edificio": {
          "edificioId": 4,
          "nombre": "E.U.M. II"
        }
      },
      "fechaReserva": this.fechaHoy,
      "usuario": "fermargo"
    }
        
  ];

  getReservas(){
    return this.reservas.slice();        
    //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
  } 
}