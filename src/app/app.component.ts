import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AzentoFront';


  constructor(private router: Router, private viewportScroller: ViewportScroller){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.viewportScroller.scrollToPosition([0,0]); // scroll a la parte superior de la página
    });
  }

  ngOnInit(): void {
    
  }
}
