import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.less']
})
export class ImportDataComponent implements OnInit {
  company = {
    name: 'Company Name',
    stockExchange: 'Abc LTD',
    record: 80,
    from_date: '2010-01-01',
    to_date: '2020-01-01'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
