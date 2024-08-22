import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemon?: Pokemon;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      this.pokemon = ((pokemonData as any).default as Pokemon[])
        .find((pokemon) => pokemon.id == Number(id));
    })
  }

}
