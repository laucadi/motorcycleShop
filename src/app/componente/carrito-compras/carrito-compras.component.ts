import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/servicios/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent implements OnInit {
  public productos: any = [];
  public grandTotal!: number;
  constructor(private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.getProducto();
  }
  getProducto() {
    this.tiendaService.getProductos().subscribe((res) => {
      this.productos = res;
      this.grandTotal = this.tiendaService.getPrecioTotal();
    });
  }
  eliminarCarrito(item: any) {
    this.tiendaService.eliminarCarrito(item);
  }
  eliminarTodo() {
    this.tiendaService.eliminarTodo();
  }
  botonPago() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Su compra fue exitosa',
    });
  }
}
