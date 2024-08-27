import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  mensaje?: string;

  constructor() { }

  setMensaje(mensaje: string){
    this.mensaje = mensaje;
  }
}
