import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor( private readonly router: Router,){

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

  toggleSelection(categoria: Categoria) {
    if (this.categoriaSeleccionada === categoria) {
      this.categoriaSeleccionada = null;
    } else {
      this.categoriaSeleccionada = categoria;
    }
    this.emitCategoryId(this.categoriaSeleccionada?.id);
  }
  emitCategoryId(id: number | undefined) {
    // Hacer lo que necesites con el ID de la categoría (por ejemplo, enviarlo a un servicio o realizar una acción)
    console.log('ID de la categoría:', id);
  }

  isCategoriaSelected(categoria: Categoria): boolean {
    return this.categoriaSeleccionada === categoria;
  }
}
