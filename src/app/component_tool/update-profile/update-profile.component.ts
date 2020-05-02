import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.less']
})
export class UpdateProfileComponent implements OnInit {
  current_status = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSwitch(status){
    this.current_status = status;
  }



}
