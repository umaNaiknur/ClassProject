import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  upass:new FormControl("",[Validators.required]),
  umail:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")])
})

get umail(){
  return this.loginForm.get('umail')
}


get upass(){
  return this.loginForm.get('upass')
}

login(){
  console.log(this.loginForm.value)
}
  constructor() { }

  ngOnInit(): void {
  }

}