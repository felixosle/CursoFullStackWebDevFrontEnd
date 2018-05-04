//Los servicios "mock" son para hacer pruebas con datos locales (cuando aún no tenemos servicios restful para probar)
import { Edificio } from '../model/edificio';
import { Sala } from '../model/sala';
import { Reserva } from '../model/reserva';

export class ReservaMockService{
    private reservas: Reserva[] = [
        {
            "id": 11111111,
            "sala": {
              "id": 1111111,
              "nombre": "Sala XXX",
              "descripcion": "Sala de reuniones nº x",
              "capacidad": 10,
              "localizacion": "string",
              "tipo": {
                "id": 1111111,
                "nombre": "Sala de reunión"
              },
              "edificio": {
                "id": 1111111,
                "nombre": "E.U.M. I",
                "cod_via": "Calle",
                "nombre_via": "Duque de la Victoria",
                "numero_via": 20,
                "poblacion": {
                  "id": 7467,
                  "provincia": {
                    "id": 40,
                    "provincia": "Valladolid",
                    "provinciaseo": "valladolid",
                    "provincia3": "VLL"
                  },
                  "poblacion": "Valladolid",
                  "poblacionseo": "valladolid",
                  "postal": 47001,
                  "latitud": "41.653363",
                  "longitud": "-4.728874"
                },
                "cod_postal": 47002,
                "titularidad": "Arrendamiento"
              }
            },
            "fechaReserva": {},
            "usuario": "marmarma"
        
    ];       

    getReservas(){
        return this.reservas.slice();
        //slice() proporciona una copia de los datos (para que los datos originales no se modifiquen)
    }
    
}