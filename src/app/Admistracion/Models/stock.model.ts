import { Producto } from "./producto.model";

export interface Stock{
    id:number
    producto:Producto
    cantidad:number
}