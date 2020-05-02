import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-comparisons-charts',
  templateUrl: './comparisons-charts.component.html',
  styleUrls: ['./comparisons-charts.component.less']
})
export class ComparisonsChartsComponent implements OnInit {
  password = '';
  username = '';
  chartsObj = {
    company_name: '',
    exchange_select: '',
    select_company: '',
    from_date: '',
    to_date: ''
  }
  companies = [
    {
      value: 'COMPANY11',
      content: 'COMPANY1'
    },
    {
      value: 'COMPANY22',
      content: 'COMPANY2'
    },
    {
      value: 'COMPANY33',
      content: 'COMPANY3'
    },
    {
      value: 'COMPANY44',
      content: 'COMPANY4'
    }
  ]
  exchange = [
    {
      value: 'BSE11',
      content: 'BSE1'
    },
    {
      value: 'BSE22',
      content: 'BSE2'
    },
    {
      value: 'BSE33',
      content: 'BSE3'
    },
    {
      value: 'BSE44',
      content: 'BSE4'
    }
  ];
  to_date = '';
  constructor() { }

  ngOnInit(): void {
  }

  getContent(formobj){
    console.log(this.chartsObj);
  }
}
