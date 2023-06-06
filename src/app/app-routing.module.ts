import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriaComponent } from './Admistracion/categoria/categoria.component';
import { CategoriaDetailComponent } from './Admistracion/categoria-detail/categoria-detail.component';
import { HomeComponent } from './Admistracion/home/home.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';


const routes:Routes=[
  {path: 'categoria',component:CategoriaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path:'',component:HomeComponent,
  children:[
    
  {path: 'categoria-detail',component:CategoriaDetailComponent},
  {path: 'categoria-detail/:id',component:CategoriaDetailComponent},
  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


