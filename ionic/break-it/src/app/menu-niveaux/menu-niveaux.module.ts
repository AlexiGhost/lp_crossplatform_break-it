import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuNiveauxPage } from './menu-niveaux.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNiveauxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuNiveauxPage]
})
export class MenuNiveauxPageModule {}
