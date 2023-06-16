import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/Services/producto.service';
import { Producto } from '../Models/producto.model';
import { OPERACION } from '../Utils/constantes';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { Categoria } from '../Models/categoria.model';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss']
})
export class ProductoDetailComponent implements OnInit {


  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion:'',
    precio:0,
    categoria:0,
    imagen: null,
    activo: ''
  };
  errorMensaje: string = '';
  op: OPERACION = OPERACION.NEW;
  OPS = OPERACION;
  imagenCat:File=null;
  isSubmit:boolean=false
  idProducto:number;
  idCategoria:number;
  ListCategorias:Categoria[]=[];
  imagenBase64: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly productoService: ProductoService,
    private readonly categoriaService:CategoriaService,
    private readonly route: Router
  ) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params['id']) {
        this.op = this.OPS.EDIT;
        this.idProducto = params['id'];
        this.fillForm(this.idProducto);
      } else {
        this.op = this.OPS.NEW;
      }
    });
    this.cogerCategorias();
  }

  onFileChange(event) {

    const file: File = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      this.imagenCat = file; // Asigna el archivo a la variable imagenCat
      this.errorMensaje = ''; // Reinicia el mensaje de error si el archivo es una imagen JPEG
      this.isSubmit=true;
      // Realiza las acciones adicionales necesarias para la imagen JPEG
    } else {
      this.isSubmit=false
      this.imagenCat = null; // Reinicia la variable imagenCat si el archivo no es una imagen JPEG
      this.errorMensaje = 'Debe seleccionar un archivo de imagen JPEG (.jpg)'; // Establece el mensaje de error
    }
    this.imagenCat=event.target.files[0];
  }
  onChangeCategoria(event:any){
   
   this.idCategoria= event.value.id;
   console.log(this.idCategoria);
   this.producto.categoria=this.idCategoria;
   console.log(this.producto);
  }

  cogerCategorias(){
    this.categoriaService.getAllCategorias().subscribe({
       next:(response:ObjectResponse<Categoria[]>)=>{
         if(response.success){
          this.ListCategorias=response.message;
          console.log(this.ListCategorias)
         }else{
         
          console.log(response.error)
         }
       }
    })
  }
  fillForm(id:any){
    this.productoService.findById(id).subscribe({
     next:(response)=>{
      if(response.success){
        this.producto=response.message;
        this.producto.categoria=response.message.categoria.id;
       ;
      }else{
        console.log("error")
      }
     }
    })
  }
  onSubmit() {


    if(this.op==this.OPS.NEW){
      console.log(this.producto)
      this.productoService.addProdcuto(this.producto).subscribe(
      (response) => {
        console.log(response);
        this.productoService.addImagenprodcuto(this.imagenCat,response.message).subscribe((response)=>{
          console.log("Se ha añadido correctmente la imagen")
          this.route.navigate(['producto'])
        })
        // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al añadir el producto', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error.
      }
    );
    }else if(this.op=this.OPS.EDIT){
      console.log(this.producto)
        this.productoService.editProducto(this.producto,this.idProducto).subscribe((response)=>{
          this.productoService.addImagenprodcuto(this.imagenCat,this.producto.id).subscribe((response)=>{
            console.log("Se ha añadido correctmente la imagen")
            this.route.navigate(['producto'])
          })
        }),
         (error) => {
      console.error('Error al añadir la categoría', error);
      // Aquí puedes manejar errores, como mostrar un mensaje de error.
    }
    }
  }
}
