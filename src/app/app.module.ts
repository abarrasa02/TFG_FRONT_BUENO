import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductoComponent } from './Admistracion/producto/producto.component';
import { ProductoDetailComponent } from './Admistracion/producto-detail/producto-detail.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { CategoriaComponent } from './Admistracion/categoria/categoria.component';
import { CategoriaDetailComponent } from './Admistracion/categoria-detail/categoria-detail.component';
import { HomeComponent } from './Admistracion/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductoComponent,
    ProductoDetailComponent,
    HeaderMenuComponent,
    AppLayoutComponent,
    CategoriaComponent,
    CategoriaDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
