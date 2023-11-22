import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Terrain2Page } from './terrain2.page';

const routes: Routes = [
  {
    path: '',
    component: Terrain2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Terrain2PageRoutingModule {}
