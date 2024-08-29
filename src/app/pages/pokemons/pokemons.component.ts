import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemon';
import { Router } from '@angular/router';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { PokemonsService } from '../../services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  pokemonsPorPagina: number = 20;
  paginas: number[] = [];
  paginaActual: number = 0;

  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(pagina: number = 0): void {
    this.pokemons = [];
    this.paginaActual = pagina;
    this.pokemonsService.getPokemons(pagina * this.pokemonsPorPagina, this.pokemonsPorPagina)
      .subscribe((pokemonResponse) => {
        this.paginas = Array(Math.ceil(pokemonResponse.count / this.pokemonsPorPagina))
          .fill(0).map((_, index) => index + 1);

        for (const pokemonResult of pokemonResponse.results) {
          this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon) => {
            this.pokemons.push(pokemon);
          });
        }
      });
  }

  onClickButton(): void {
    console.log("Botón presionado");
  }

  onClickPokemon(pokemon: Pokemon): void {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
