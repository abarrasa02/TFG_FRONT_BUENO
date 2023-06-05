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
  ListCategorias:Categoria[]=[];
  successMessage:string="";
  errorMessage:string="";
  idCategoria:Number=0;
  isOpenSuccessMessage: boolean=false;
  isOpenErrorMessage: boolean=false;
  

  ngOnInit(): void {
  
  }

  añadirCategoria(){
    this.router.navigate(['categoria-detail'])
  }
  editarCategoria(){
    this.router.navigate(['categoria-detail',this.idCategoria])
  }
}
