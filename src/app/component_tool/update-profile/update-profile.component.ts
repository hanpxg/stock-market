import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.less']
})
export class UpdateProfileComponent implements OnInit {
  current_status = '';
  pwdObj = {
    id: 1,
    password:'',
    oldPassword:''
  }
  
  repassword = '';
  type = ""
  profileObj = {
    id: 1,
    name: "",
    type: false,
    email: "",
    mobileNumber: ""
  }
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData()
  };
  onSwitch(status){
    this.current_status = status;
  }
  onUpdatePwd() {
    if (this.repassword == this.pwdObj.password) {
      console.log('onUpdatePwd');
      console.log(this.pwdObj);
      const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");
      let url = "http://localhost:8030/user/updatepwd";
      this.http.post(url,this.pwdObj,  { headers } )
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

  onUpdateProfile() {
    if (this.type == 'admin') {
      this.profileObj.type = true;
    } else {
      this.profileObj.type = false;
    }
    console.log('onUpdatePwd');
    console.log(this.profileObj);
    const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");
    let url = "http://localhost:8030/user/updateprofile";
    this.http.post(url,this.profileObj,  { headers } )
        .subscribe( val =>  {
          console.log("Successful");
        }, error => {
          console.log("Post call in error", error);
        }, () => {
          console.log("The Post observable is now completed.");
        }
      );
  }


  initData() {
    let url='http://localhost:8030/user/profileById/1';
    this.http.get(url).subscribe((data: any) => {
      this.profileObj = data;
      if (this.profileObj.type == true) {
        this.type = 'admin';
      } else {
        this.type = 'user'
      }
      console.log(data);
    });
  }


}
