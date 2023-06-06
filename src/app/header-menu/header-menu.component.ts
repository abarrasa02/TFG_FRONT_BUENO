import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent  implements OnInit{


  constructor(private readonly router:Router){

  } 
   ngOnInit(): void {
    
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
