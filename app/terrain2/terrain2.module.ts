import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Terrain2PageRoutingModule } from './terrain2-routing.module';

import { Terrain2Page } from './terrain2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Terrain2PageRoutingModule
  ],
  declarations: [Terrain2Page]
})
export class Terrain2PageModule {}
