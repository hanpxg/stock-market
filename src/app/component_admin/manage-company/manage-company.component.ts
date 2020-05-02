import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.less']
})
export class ManageCompanyComponent implements OnInit {

  editCompany = {
    name: 'Company Name',
    description: 'Old Description',
    turnOver: 'Old TurnOver',
    CEOOrBM: 'CEOOrBM',
    date: '2020-01-01'
  };
  companies = [
    {
      id: 1,
      logo: 'LOGO1',
      name: 'Company Name1',
      stockExchange: 'Stock Exchange2',
      other: 'Other Info1',
    },
    {
      id: 2,
      logo: 'LOGO2',
      name: 'Company Name2',
      stockExchange: 'Stock Exchange2',
      other: 'Other Info2',
    },
  ];
  addStatus = false;
  editStatus = false;
  constructor() { }

  ngOnInit(): void {
  }
  onAddCompany(){
    
  }
  onStartEditCompany(i){
    console.log(i);
    console.log('onEditCompany()');
    this.editStatus = true;
  }
  onEditCompany(){
    console.log();
    console.log('onEditCompany()');
    // this.editStatus = false;
  }
  onAddSwitch(status){
    this.addStatus = status;
  }

  onEditSwitch(status){
    this.editStatus = status;
  }
}
