import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'menu-options', loadChildren: './menu-options/menu-options.module#MenuOptionsPageModule' },
  { path: 'menu-niveaux', loadChildren: './menu-niveaux/menu-niveaux.module#MenuNiveauxPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
