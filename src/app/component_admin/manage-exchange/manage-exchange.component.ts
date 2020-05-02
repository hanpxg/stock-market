import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.less']
})
export class ManageExchangeComponent implements OnInit {
  isAddExchange = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSwitch(status){
    this.isAddExchange = status;
  }
  onAddExchange() {
    console.log("onAddExchange");
  }
}
