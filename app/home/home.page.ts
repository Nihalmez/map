import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { StorePage } from '../store/store.page'; 
import { Store2Page } from '../store2/store2.page';
import { TerrainPage } from '../terrain/terrain.page';
import { Terrain2Page } from '../terrain2/terrain2.page';


@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map') mapRef!: ElementRef;
  map!: GoogleMap;

  constructor(private modalCtrl: ModalController) {}

  ionViewDidEnter() {
    this.createMap();
  }
  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 50.49,
          lng: 4.47,
        },
        zoom: 8,
      },
    });
    await this.addMarkers();
  }
  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat:  50.49783090374445,
          lng: 4.799153337442611,
        
    
        },
        title: 'Bravo Factory',
      },
      {
        coordinate: {
          lat:  50.78339995576469,
          lng: 3.109437735894947,


        },
        title: 'Safe Zone Airsoft',
      },

      {
        coordinate: {
          lat:  51.08370906924777,
          lng: 4.566367817122088,
       
        },
        title: 'FORT KNOX AIRSOFT',
        
      },

      {
        coordinate: {
          lat:  48.54288999767606,
          lng: 7.576979268927996,

      
        },
        title: 'Flams Airsoft Team Strasbourg',
        
      },

    ];

    
    const result = await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker) => {
      let modalComponent: any;

      if (marker.title === 'Bravo Factory') {
        modalComponent = StorePage;
      } else if (marker.title === 'Safe Zone Airsoft') {
        modalComponent = Store2Page; 
      } else if (marker.title === 'FORT KNOX AIRSOFT') {
        modalComponent = TerrainPage;
      } else if (marker.title === 'Flams Airsoft Team Strasbourg') {
        modalComponent = Terrain2Page;
      }

      if (modalComponent) {
        const modal = await this.modalCtrl.create({
          component: modalComponent,
          componentProps: {
            marker,
          },
          breakpoints: [0, 0.3],
          initialBreakpoint: 0.3,
          
        });

        modal.present();
      }
    });
  }
}
