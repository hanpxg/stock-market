import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.less']
})
export class ManageCompanyComponent implements OnInit {

  addCompany = {
    companyName: "",
    turnover: 2.0,
    iconUrl: "",
    ceo: "",
    boardOfDirectors: "",
    sectorName: "",
    briefWriteup: ""
  };
  editCompany =   {
    id: 1,
    companyName: "",
    turnover: 2.0,
    iconUrl: "",
    ceo: "",
    boardOfDirectors: "",
    sectorName: "",
    briefWriteup: ""
};
  companies = [];
  addStatus = false;
  editStatus = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }
  onAddCompany(){
    this.updateData(this.addCompany);
    this.onAddSwitch(false);
  }
  onStartEditCompany(i) {
    this.editCompany.id = this.companies[i].id;
    this.editCompany.companyName = this.companies[i].companyName;
    this.editCompany.turnover = this.companies[i].turnover;
    this.editCompany.iconUrl = this.companies[i].iconUrl;
    this.editCompany.ceo = this.companies[i].ceo;
    this.editCompany.boardOfDirectors = this.companies[i].boardOfDirectors;
    this.editCompany.sectorName = this.companies[i].sectorName;
    this.editCompany.briefWriteup = this.companies[i].briefWriteup;
    console.log(this.editCompany);
    this.editStatus = true;
  }
  onEditCompany(){
    this.updateData(this.editCompany);
    this.onEditSwitch(false);
  }
  onAddSwitch(status){
    this.addStatus = status;
  }

  updateData(data) {
    const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");
    let url = "http://localhost:8030/company/save";
    this.http.post(url, data,  { headers } )
        .subscribe( val =>  {
          console.log("Post call successful value returned in body", val);
          this.initData();
        }, error => {
          console.log("Post call in error", error);
        }, () => {
          console.log("The Post observable is now completed.");
        }
      );
  }

  onEditSwitch(status){
    this.editStatus = status;
  }

  initData() {
    let url='http://localhost:8030/company/findAll';
    this.http.get(url).subscribe((data: any) => {
      this.companies = data;
      console.log(data);
    });
  }
}
