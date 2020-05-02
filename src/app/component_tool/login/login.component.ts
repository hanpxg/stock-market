import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @Output() login_status=new EventEmitter();
  current_status = 'login'
  loginObj = {
    email: '',
    password: '',
    usertype: ''
  }
  signObj = {
    username:'',
    email: '',
    phone: '',
    password: '',
    repassword: '',
    usertype: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log('11111111111111')
    this.login_status.emit({login_status: this.loginObj.usertype})
  }
  onSwitch(status){
    this.current_status = status;
  }
  onSignup() {
    console.log('signup');
    console.log(this.signObj);
  }
  // isOn = false;
  // clicked() { this.isOn = !this.isOn; }
  // get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
