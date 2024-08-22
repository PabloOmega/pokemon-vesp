import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';

function randomInt(max: number){
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pokemons: Pokemon[] = (pokemonData as any).default;
  indicePokemonSemana: number = randomInt(this.pokemons.length);

  constructor() { }

  ngOnInit(): void { 
    
  }

}
