//Los servicios "mock" son para hacer pruebas con datos locales (cuando aún no tenemos servicios restful para probar)
import { Edificio } from '../../api-rest/model/edificio';
import { Sala } from '../../api-rest/model/sala';
import { Reserva } from '../../api-rest/model/reserva';

export class ReservaMockService{
  // fechaHoy: Date = new Date();
  // private reservas: Reserva[] = [      
  //   {
  //     "id": 1,
  //     "sala": {
  //       "id": 1,
  //       "nombre": "Sala 1",
  //       "edificio": {
  //         "id": 1,
  //         "nombre": "E.U.M. I"
  //       }
  //     },
  //     "fechaReserva": this.fechaHoy,
  //     "usuario": "marmarma"
  //   },

  //   {
  //     "id": 2,
  //     "sala": {
  //       "id": 2,
  //       "nombre": "Sala 2",
  //       "edificio": {
  //         "id": 1,
  //         "nombre": "E.U.M. I"
  //       }
  //     },
  //     "fechaReserva": this.fechaHoy,
  //     "usuario": "martintin"
  //   },

  //   {
  //     "id": 3,
  //     "sala": {
  //       "id": 1,
  //       "nombre": "Sala 1",
  //       "edificio": {
  //         "id": 1,
  //         "nombre": "E.U.M. I"
  //       }
  //     },
  //     "fechaReserva": this.fechaHoy,
  //     "usuario": "ferferfe"
  //   },

  //   {
  //     "id": 4,
  //     "sala": {
  //       "id": 3,
  //       "nombre": "Sala 3",
  //       "edificio": {
  //         "id": 3,
  //         "nombre": "E.U.M. II"
  //       }
  //     },
  //     "fechaReserva": this.fechaHoy,
  //     "usuario": "gomferma"
  //   },

  //   {
  //     "id": 5,
  //     "sala": {
  //       "id": 3,
  //       "nombre": "Sala 3",
  //       "edificio": {
  //         "id": 4,
  //         "nombre": "E.U.M. II"
  //       }
  //     },
  //     "fechaReserva": this.fechaHoy,
  //     "usuario": "fermargo"
  //   }
        
  // ];

  // getReservas(){
  //   return this.reservas.slice();        
  //   //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
  // } 
}