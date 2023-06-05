import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriaComponent } from './Admistracion/categoria/categoria.component';
import { CategoriaDetailComponent } from './Admistracion/categoria-detail/categoria-detail.component';
import { HomeComponent } from './Admistracion/home/home.component';


const routes:Routes=[
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'categoria',component:CategoriaComponent},
  {path: 'categoria-detail',component:CategoriaDetailComponent},
  {path: 'categoria-detail/:id',component:CategoriaDetailComponent},
  {path:'home',component:HomeComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


