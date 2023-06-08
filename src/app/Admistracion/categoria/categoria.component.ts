import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Services/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor( private readonly router: Router,
    private readonly categoriaService :CategoriaService){

  }
  categoriaSeleccionada: Categoria | null = null;
  listChecks: Array<boolean> = [];
  ListCategorias:Categoria[]=[];
  successMessage:string="";
  errorMessage:string="";
  idCategoria:Number=0;
  isOpenSuccessMessage: boolean=false;
  isOpenErrorMessage: boolean=false;


  
  categorias: Categoria[] = [
    { id: 1, nombre: 'Categoría 1', imagen: "", activo: 'Sí' },
    { id: 2, nombre: 'Categoría 2', imagen: "", activo: 'No' },
    { id: 3, nombre: 'Categoría 3', imagen: "", activo: 'Sí' },
  ];

  ngOnInit(): void {
    
  }





  añadirCategoria(){
    this.router.navigate(['categoria-detail'])
  }
  editarCategoria(){
    this.router.navigate(['categoria-detail',this.idCategoria])
  }

  selectedCategories(){
  
  }
  
  // cogerCategorias(){
  //   this.categoriaService.getAllCategorias().subscribe({
      
  //   })
  // }


 
}
