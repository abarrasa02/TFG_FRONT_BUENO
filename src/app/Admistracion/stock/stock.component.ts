import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/Services/stock.service';
import { Stock } from '../Models/stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit{

  listStock:Stock[]=[];

  constructor(private readonly route:Router,
  private readonly stockService:StockService){

  }
  ngOnInit(): void {
    
  }

  cogerStock(){
    this.stockService.getAllStock().subscribe((response)=>{
      this.listStock=response.message;
    })
  }
}
