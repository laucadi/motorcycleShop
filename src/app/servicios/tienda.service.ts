import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Moto } from 'src/app/interfaces/motoApi';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  private URL = 'http://localhost:3000/users';
  public listaCarrito: any = [];
  public ListaProducto = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getMoto(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.URL);
  }
  getProductos() {
    return this.ListaProducto.asObservable();
  }
  setProducto(producto: any) {
    this.listaCarrito.push(...producto);
    this.ListaProducto.next(producto);
  }
  anadirCarrito({ producto }: { producto: any }): void {
    this.listaCarrito.push(producto);
    this.ListaProducto.next(this.listaCarrito);
    this.getPrecioTotal();
    Swal.fire({
      title: 'Añadido al carrito de compras',
      confirmButtonColor: '#bfbd31',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }
  getPrecioTotal(): number {
    let total = 0;
    this.listaCarrito.map((a: any) => {
      total += a.price;
    });
    return total;
  }
  eliminarCarrito(producto: any) {
    this.listaCarrito.map((a: any, index: any) => {
      if (producto.id === a.id) {
        this.listaCarrito.splice(index, 1);
      }
    });
    this.ListaProducto.next(this.listaCarrito);
  }
  eliminarTodo() {
    this.listaCarrito = [];
    this.ListaProducto.next(this.listaCarrito);
  }
}
