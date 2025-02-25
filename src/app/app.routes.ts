import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';
import { Error404Component } from './pages/error404/error404.component';
import { permissionsGuard } from './guards/permissions.guard';
import { warningsGuard } from './guards/warnings.guard';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemons', component: PokemonsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'pokemons/:id', component: PokemonComponent },
    { path: 'posts', component: PostsComponent, canDeactivate: [warningsGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'acercade', component: AcercadeComponent },
    { path: 'todos', component: TodosComponent, canActivate: [permissionsGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
