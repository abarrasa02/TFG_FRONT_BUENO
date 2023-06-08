import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
 errorMessage: string="";
 ListCategorias:Categoria[]=[]
 

  constructor(  
    private readonly categoriaService:CategoriaService,
    private domSanitizer: DomSanitizer
  ){
    
  }
 

  ngOnInit(): void {
    this.cogerCategorias();
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
 
 
   convertirBlobAUrl(data: any): SafeUrl | string {
  
    if (data instanceof Blob) {
      const objectURL = URL.createObjectURL(data);
      return this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    } else {
      console.warn('El dato proporcionado no es un Blob');
      return '';
    }
  }
}
