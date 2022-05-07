import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoibGF1Y2FkaTE4MiIsImEiOiJjbDJtbmJlenkwdjVlM2NycXA4Z3pzMnQ5In0.uPNLZtn3gSNS1qZLwm9uGA';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
