import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';
import { Usuario } from '../Models/usuario.model';
import { carrito } from '../Models/carrito.model';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  userLog:Usuario
  listCarritoItem:carrito[]=[]
  totalPrecio:number=0;
  constructor(private readonly route:Router,
    private readonly carritoService:CarritoService){

  }
  ngOnInit(): void {
    this.getProductoCarrito();
  }
  getProductoCarrito(){
      if(sessionStorage.getItem('user')!=null){
        this.userLog = JSON.parse(sessionStorage.getItem('user'));
        this.carritoService.findById(this.userLog.id).subscribe({
          next: (response: ObjectResponse<carrito[]>) => {
            if (response.success) {
              this.listCarritoItem = response.message;
              this.listCarritoItem.forEach(item=>{
                this.totalPrecio+=item.producto.precio*item.cantidad;
              })
            } else {
                console.log("No hay producto en el carrito")
            }
          }
        })
      }else{
        this.route.navigate(['login']);
      }
  }

  incrementQuantity(item: carrito) {
    item.cantidad += 1;
  }

  decrementQuantity(item: carrito) {
    item.cantidad -= 1;
  }

   eliminarProdcutoCarrito(id: number) {
    this.carritoService.deleteProdcutoCarrito(id).subscribe(response=>{
      console.log('Prodcuto eliminado con éxito', response);
      this.getProductoCarrito();
    },
    error => {
      console.error('Error al eliminar el  producuto', error);
    })
  }

  async actualizarCarrito(listCarrito: carrito[]) {
  

    this.carritoService.updateCarrito(listCarrito).subscribe(response=>{
      console.log("Carrito actualizado correctamente")
      this.getProductoCarrito();
    })
    
  }
}
