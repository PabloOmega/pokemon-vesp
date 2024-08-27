import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemons', component: PokemonsComponent },
    { path: 'pokemons/:id', component: PokemonComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'acercade', component: AcercadeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
