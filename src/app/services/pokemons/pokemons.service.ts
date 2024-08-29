import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from '../../utils/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';
  mensaje?: string;

  constructor(private http: HttpClient) { }

  setMensaje(mensaje: string){
    this.mensaje = mensaje;
  }

  getPokemons(offset: number = 0, limit: number = 20): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.url}?offset=${offset}&limit=${limit}`);
  }

  getPokemon(param: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}${param}`);
  }
}
