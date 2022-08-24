import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/interfaces/motoApi';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  articulos: Moto[] = [];
  public totalProductos: number = 0;

  constructor(private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.mostarArticulos();
    this.mostrarTotal();
  }

  mostarArticulos() {
    this.tiendaService.getMoto().subscribe((res) => {
      this.articulos = res;
    });
    this.mostrarTotal();
  }

  mostrarTotal() {
    this.tiendaService.getProductos().subscribe((items) => {
      this.totalProductos = items.length;
    });
  }
  addCarrito(item: any) {
    this.tiendaService.anadirCarrito({ producto: item });
  }
}
