import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store2',
  templateUrl: './store2.page.html',
  styleUrls: ['./store2.page.scss'],
})
export class Store2Page {
  store2Photos = [
    'url_photo1.jpg',
    'url_photo2.jpg',
    'url_photo3.jpg',
    // Ajoutez autant de photos que nécessaire
  ];

  store2Hours = 'Lundi - Vendredi : 9h00 - 18h00\nSamedi : 10h00 - 15h00';

  store2Description =
    'Bienvenue dans notre magasin Airsoft, nous offrons un large choix.';

  constructor() {}
}