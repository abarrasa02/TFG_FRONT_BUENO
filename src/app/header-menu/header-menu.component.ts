import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent  implements OnInit{
  items: MenuItem[]=[];

  constructor(private readonly router:Router){

  } 
   ngOnInit(): void {
    this.items = [
      {
        label: 'Administrador',
        icon: 'pi pi-fw pi-cog',
        items: [
          {label: 'Categorías', icon: 'pi pi-fw pi-tags', routerLink: ['/categorias']},
          {label: 'Productos', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/productos']}
        ]
      }
    ];
  }
  
  login(){
    this.router.navigate(['login'])
  }
  register(){
    this.router.navigate(['register'])
  }
  categoria(){
    this.router.navigate(['categoria'])
  }
}
