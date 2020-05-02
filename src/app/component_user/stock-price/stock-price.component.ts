import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.less']
})
export class StockPriceComponent implements OnInit {
  priceImage = 'assets/stock price.png';
  constructor() { }

  ngOnInit(): void {
  }

}
