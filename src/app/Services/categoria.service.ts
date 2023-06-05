import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Admistracion/Models/categoria.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService   {

  apiUrl:String='http://localhost:8080/categorias'
  constructor(private readonly http: HttpClient) { 
    
  }
}
