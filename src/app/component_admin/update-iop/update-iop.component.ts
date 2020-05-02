import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-iop',
  templateUrl: './update-iop.component.html',
  styleUrls: ['./update-iop.component.less']
})
export class UpdateIopComponent implements OnInit {
  isAddIOP = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSwitch(status){
    this.isAddIOP = status;
  }
  onAddIOP() {
    console.log('onAddIOP()');
  }
}
