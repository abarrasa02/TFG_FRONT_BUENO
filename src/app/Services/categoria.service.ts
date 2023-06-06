import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BackendService, ObjectResponse } from '../core/base/service/backend-service';
import { Categoria } from '../Admistracion/Models/categoria.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BackendService  {

 
  constructor(private readonly http: HttpClient) { 
   super();
  }
 

  getAllCategorias():Observable<ObjectResponse<Categoria[]>>{
      return this.http.get<ObjectResponse<Categoria[]>>(
        `${this.urlApi}/categoria/all`,
      )
  }
}
