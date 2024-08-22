import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Path } from '../../utils/path';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  paths: Path[] = [
    { path: '/home', nombre: 'Home' },
    { path: '/pokemons', nombre: 'Pokemons' },
    { path: '/acercade', nombre: 'Acerca de' }
  ];

}
