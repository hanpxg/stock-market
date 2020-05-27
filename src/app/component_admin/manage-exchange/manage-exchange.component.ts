import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.less']
})
export class ManageExchangeComponent implements OnInit {
  isAddExchange = false;
  tipFlag = false;
  exchanges = [];
  addItem = {
    name : "name",
    brief: "",
    address: "",
    remark: ""
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.initData();
  }
  onSwitch(status){
    this.isAddExchange = status;
  }
  onAddExchange() {
    console.log(this.addItem);
    this.addItem.name = this.addItem.name + "1";
    const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");
    let url = "http://localhost:8030/exchange/save";
    this.http.post(url, this.addItem,  { headers } )
        .subscribe( val =>  {
          console.log("Post call successful value returned in body", val);
          this.onSwitch(false);
          this.tipFlag = false;
          this.initData();
        }, error => {
          console.log("Post call in error", error);
          this.tipFlag = true;
        }, () => {
          console.log("The Post observable is now completed.");
        }
      );
  }

  initData() {
    let url='http://localhost:8030/exchange/findAll';
    this.http.get(url).subscribe((data: any) => {
      this.exchanges = data;
      console.log(data);
    });
  }
}
