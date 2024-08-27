import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons/pokemons.service';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css'
})
export class AcercadeComponent {

  contador: number = 0;

  constructor(public pokemonsService: PokemonsService) {}

  onClick(): void {
    this.pokemonsService.setMensaje(`Clicks: ${++this.contador}`);
  }

}
