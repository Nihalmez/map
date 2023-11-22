import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})


export class StorePage {
  storePhotos = [
    'url_photo1.jpg',
    'url_photo2.jpg',
    'url_photo3.jpg',
    // Ajoutez autant de photos que nécessaire
  ];

  storeHours = 'Lundi - Vendredi : 9h00 - 18h00\nSamedi : 10h00 - 15h00';

  storeDescription =
    'Bienvenue dans notre magasin Airsoft, nous offrons un large choix.';

  constructor() {}
}
