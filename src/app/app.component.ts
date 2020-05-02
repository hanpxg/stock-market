import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Compiler, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IOPDetailComponent } from './component_user/iop-detail/iop-detail.component';
import { ComparisonsChartsComponent } from './component_user/comparisons-charts/comparisons-charts.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {

  @ViewChild('current_component', { read: ViewContainerRef }) current_component:ViewContainerRef;
  title = 'StockMarketCharting';
  CURRENT = 'current';
  EMPTY = '';
  navWidthStr = '';
  LOGIN = 'LOGIN';
  LOGOUT = 'LOGOUT'
  loginStatus = this.LOGIN;

  current_user = 0;
  // login_status = 0;
  admin = {
    status: 1,
    current_header: [
      {
        router: '/import-data',
        content: 'Import Data',
        current_class: this.EMPTY,
        index: 0
      },
      {
        router: '/manage-company',
        content: 'Manage Company',
        current_class: this.EMPTY,
        index: 1
      },
      {
        router: '/manage-exchange',
        content: 'Manage Exchange',
        current_class: this.EMPTY,
        index: 2
      },
      {
        router: '/update-iop',
        content: 'Update IOP Detail',
        current_class: this.EMPTY,
        index: 3
      },
      {
        router: '/update-profile',
        content: 'Other Action',
        current_class: this.EMPTY,
        index: 4
      }
    ],
    navWidthStr: "width: 20%;"
  }
  user = {
    status: 0,
    current_header: [
      {
        router: '/iop-detail',
        content: 'IPOs',
        current_class: this.EMPTY,
        index: 0
      },
      {
        router: '/stock-price',
        content: 'Compare Company',
        current_class: this.EMPTY,
        index: 1
      },
      {
        router: '/comparisons-charts',
        content: 'Compare Sectors',
        current_class: this.EMPTY,
        index: 2
      },
      {
        router: '/update-profile',
        content: 'Other Action',
        current_class: this.EMPTY,
        index: 3
      }
    ],
    navWidthStr: "width: 25%;"
  }
  current_header = []
  constructor(
    private cfr:ComponentFactoryResolver,
    private router: Router
  ) {
  }
  ngOnChanges(){
  }

  ngOnInit(){
    // this.router.navigate(["/login"]);  
  }
  
  ngAfterViewInit() {
    // this.current_component.createComponent(this.cfr.resolveComponentFactory(ComparisonsChartsComponent));
  }
  onHeaderClick(index) {
    for (var i = 0; i < this.current_header.length; i ++) {
      this.current_header[i].current_class = this.EMPTY;
    }
    this.current_header[index].current_class = this.CURRENT;
    console.log(index);
  };


  onLogout(){

  };

  onTest() {
    console.log('ontest');
    // this.router.navigate(["/user-main"]);
    // window.location.assign("/user-main");
    // window.open("/user-main");
  };

  updateCompontent(temp_component) {
    // console.log(temp_component);
    // this.current_component.remove();
    // this.current_component.createComponent(this.cfr.resolveComponentFactory(temp_component));
  };
  onUpdateLoginStatus(event) {
    console.log('222222222222222');
    console.log(event)
    this.current_user = event.login_status;
    // let current_obj = {};
    console.log(this.current_user)
    if (this.current_user ==  1) {
      console.log(111);
      this.loginStatus = this.LOGOUT;
      // current_obj = this.user;
      this.navWidthStr = this.user.navWidthStr
      this.current_header = this.user.current_header
    } else if (this.current_user == 2) {
      console.log(222);
      // current_obj = this.admin;
      this.navWidthStr = this.admin.navWidthStr
      this.loginStatus = this.LOGOUT;
      this.current_header = this.admin.current_header
    }
    if (this.current_user == 2 || this.current_user == 1) {
      this.router.navigate([this.current_header[0].router]);
      this.current_header[0].current_class = this.CURRENT;
    }
     
  }

}
