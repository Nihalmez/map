import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
 
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'store2',
    loadChildren: () => import('./store2/store2.module').then( m => m.Store2PageModule)
  },
  {
    path: 'terrain',
    loadChildren: () => import('./terrain/terrain.module').then( m => m.TerrainPageModule)
  },
  {
    path: 'terrain2',
    loadChildren: () => import('./terrain2/terrain2.module').then( m => m.Terrain2PageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
