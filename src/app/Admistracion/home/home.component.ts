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

  cogerCategorias() {
    this.categoriaService.getAllCategorias().subscribe({
      next: (response: ObjectResponse<Categoria[]>) => {
        if (response.success) {
          this.ListCategorias = response.message.map(categoria => ({
            ...categoria,
            imagen: this.convertirBlobAUrl(categoria.imagen)
          }));
        } else {
          this.errorMessage = response.error;
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

  crearCategorias() {
    this.ListCategorias=[];
    const categoria1: Categoria = {
      id: 1,
      nombre: 'Jerseis ',
      imagen: 'https://s3.ppllstatics.com/diariosur/www/multimedia/202012/11/media/JERSEYS-NAVIDAD/hipercorcombo.jpg',
      activo: 'S'
    };
  
    const categoria2: Categoria = {
      id: 2,
      nombre: 'Camisetas',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZq3fhnY1X2u_pV_inv8y0NJc0O4pPWg8gtg&usqp=CAU',
      activo: 'S'
    };
  
    const categoria3: Categoria = {
      id: 3,
      nombre: 'Zapatillas',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OEC_7_059V1tnxGiA_QHyV0qFYPOzCKPPQ&usqp=CAU',
      activo: 'S'
    };
  
   
    this.ListCategorias.push(categoria1,categoria2,categoria3)
  }
  images = [
    'https://ejemplo.com/imagen1.jpg',
    'https://ejemplo.com/imagen2.jpg',
    'https://ejemplo.com/imagen3.jpg'
  ];
}
