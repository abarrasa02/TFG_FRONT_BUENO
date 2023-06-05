import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{


  constructor(){

  }

  ngOnInit(): void {
    
  }


  categorias: Categoria[] = [
    {
      id:1,
      nombre: 'Jerseis',
      imagen: 'https://s3.ppllstatics.com/diariosur/www/multimedia/202012/11/media/JERSEYS-NAVIDAD/hipercorcombo.jpg',
      activo:'S'
    },
    {
      id:1,
      nombre: 'Categoría 2',
      imagen: 'https://ejemplo.com/imagen2.jpg',
      activo:'S'
    },
    {
      id:1,
      nombre: 'Categoría 3',
      imagen: 'https://ejemplo.com/imagen3.jpg',
      activo:'S'
    },
    // Agrega más categorías según sea necesario
  ];
  images = [
    'https://ejemplo.com/imagen1.jpg',
    'https://ejemplo.com/imagen2.jpg',
    'https://ejemplo.com/imagen3.jpg'
  ];
}
