import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string;
 password:string;
  constructor() { }

  ngOnInit() {
  }
  LoginUser(){
    if(this.username=="admin" && this.password=="admin123")
    {
      console.log("welcome");
    }
      else{
        console.log("username name & password is worng");

      }
    
  }

}
