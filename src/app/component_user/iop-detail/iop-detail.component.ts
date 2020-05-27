import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-iop-detail',
  templateUrl: './iop-detail.component.html',
  styleUrls: ['./iop-detail.component.less']
})
export class IOPDetailComponent implements OnInit {
  ipo_detail = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    let url='http://localhost:8030/company/ipo_detail/1';
    this.http.get(url).subscribe((data: any) => {
      this.ipo_detail = data;
      console.log(data);
    });
  }

}
