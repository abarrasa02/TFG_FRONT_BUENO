import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { Categoria } from '../Models/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.scss']
})
export class CategoriaDetailComponent implements OnInit{
  categoria: Categoria = {
    id: 0,
    nombre: '',
    imagen: null,
    activo: ''
  };
  imagenBase64: string ="";

  constructor(
    private readonly categoriaService:CategoriaService,
    private readonly route:Router
    ){

  }
  ngOnInit() {

  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader=new FileReader();

      reader.onload=()=>{
          this.imagenBase64=reader.result?.toString() || '';
      }
      reader.readAsDataURL(file);
      this.categoria.imagen[0]=this.imagenBase64;
    }
  }


  onSubmit() {
    this.categoriaService.addCategoria(this.categoria).subscribe(
      (response) => {
        console.log('Categoría añadida exitosamente', response);
        this.route.navigate(['categoria'])
        // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al añadir la categoría', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error.
      }
    );
  }
}


