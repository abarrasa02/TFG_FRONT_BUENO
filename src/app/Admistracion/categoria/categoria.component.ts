import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor( private readonly router: Router,
   private readonly categoriaService :CategoriaService
   ){

  }
  categoriaSeleccionada: Categoria | null = null;
  listChecks: Array<boolean> = [];
  ListCategorias:Categoria[]=[];
  successMessage:string="";
  errorMessage:string="";
  idCategoria:Number=0;
  isOpenSuccessMessage: boolean=false;
  isOpenErrorMessage: boolean=false;


  
  // categorias: Categoria[] = [
  //   { id: 1, nombre: 'Categoría 1', imagen: "https://media.istockphoto.com/id/1141270455/es/vector/icono-de-gafas-aislado-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=tIm5I8pQnIBGT8DbrPN1uM47FVOxnbBdr0g_1vVbOc0=", activo: 'Sí' },
  //   { id: 2, nombre: 'Categoría 2', imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elmundo.es%2Ftecnologia%2Fgadgets%2F2021%2F09%2F10%2F613b02cafc6c83243e8b466b.html&psig=AOvVaw3SXrJNsrpLuacxo61b6dlI&ust=1686147738764000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiWsvnrrv8CFQAAAAAdAAAAABAE", activo: 'No' },
  //   { id: 3, nombre: 'Categoría 3', imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elmundo.es%2Ftecnologia%2Fgadgets%2F2021%2F09%2F10%2F613b02cafc6c83243e8b466b.html&psig=AOvVaw3SXrJNsrpLuacxo61b6dlI&ust=1686147738764000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiWsvnrrv8CFQAAAAAdAAAAABAE", activo: 'Sí' },
  // ];

  ngOnInit(): void {
    this.cogerCategorias();
    
  }





  anadirCategoria(){
    this.router.navigate(['categoria-detail'])
  }
  editarCategoria(){
    this.router.navigate(['categoria-detail',this.idCategoria])
  }
 deleteCategoria(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(
      response => {
        console.log('Categoría eliminada con éxito', response);
      },
      error => {
        console.error('Error al eliminar la categoría', error);
      }
    );
    this.ListCategorias=[];
    this.cogerCategorias();
  }

  selectedCategories(){
  
  }
  
    cogerCategorias(){
      this.categoriaService.getAllCategorias().subscribe({
         next:(response:ObjectResponse<Categoria[]>)=>{
           if(response.success){
             this.ListCategorias=response.message;
           }else{
            this.errorMessage=response.error;
             console.log(this.errorMessage)
           }
         }
      })
    }


 
}
