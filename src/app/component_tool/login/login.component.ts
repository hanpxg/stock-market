import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @Output() login_status=new EventEmitter();
  current_status = 'login'
  type = ''
  loginObj = {
    email: '',
    password: '',
    type: ''
  }
  repassword = '';
  signObj = {
    name:'',
    email: '',
    mobileNumber: '',
    password: '',
    type: false
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    console.log('11111111111111')
    this.login_status.emit({login_status: this.loginObj.type})

  }
  onSwitch(status){
    this.current_status = status;
  }
  onSignup() {
    if (this.repassword == this.signObj.password) {
      console.log('signup');
      console.log(this.signObj);
      if (this.type == "true") {
        this.signObj.type = true;
      }
      const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");
      let url = "http://localhost:8030/user/register";
      this.http.post(url,this.signObj,  { headers } )
          .subscribe( val =>  {
            console.log("Post call successful value returned in body", val);
          }, error => {
            console.log("Post call in error", error);
          }, () => {
            console.log("The Post observable is now completed.");
          }
        );
    }

  }
  // isOn = false;
  // clicked() { this.isOn = !this.isOn; }
  // get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
