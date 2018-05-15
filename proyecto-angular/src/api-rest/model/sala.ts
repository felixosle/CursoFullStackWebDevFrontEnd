/**
 * API Reserva de Salas
 * Definición de una API sencilla de reserva de salas para fines educativos. Cuenta con 5 tipos principales de objeto: Usuarios, Reservas, Edificios, Salas y Recursos (comentado)
 *
 * OpenAPI spec version: SinSeguridad
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Edificio } from './edificio';
import { TipoSala } from './tipoSala';


export interface Sala {
    /**
     * Id de la Sala
     */
    id?: number;
    /**
     * Nombre de la Sala
     */
    nombre: string;
    descripcion?: string;
    capacidad?: number;
    /**
     * Localizacion de la sala
     */
    localizacion?: string;
    tipoSala?: TipoSala;
    edificio?: Edificio;
}