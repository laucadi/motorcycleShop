import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.4512, 43.6568],
      zoom: 13,
    });
  }
}
