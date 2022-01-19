import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regs',
  templateUrl: './regs.component.html',
  styleUrls: ['./regs.component.css']
})
export class RegsComponent implements OnInit {
regForm=new FormGroup({
  fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]),
  lname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]),
  lang:new FormControl("",[Validators.required]),
  number:new FormControl("",[Validators.required,Validators.pattern("((0|91)?[7-9][0-9]{9})")]),
  address:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
  city:new FormControl("",[Validators.required]),
  state:new FormControl("",[Validators.required]),
  sql:new FormControl("",[Validators.required]),
  oracle:new FormControl("",[Validators.required]),
  nosql:new FormControl("",[Validators.required]),
  female:new FormControl("",[Validators.required]),
  male:new FormControl("",[Validators.required])
})

get fname(){
 return this.regForm.get('fname')
}
get lname(){
  return this.regForm.get('lname')
 }
 get lang(){
  return this.regForm.get('lang')
 }
 get number(){
   return this.regForm.get('number')
 }
 get address(){
   return this.regForm.get('address')
 }
 get city(){
   return this.regForm.get('city')
 }
 get state(){
   return this.regForm.get('state')
 }
 get  sql(){
   return this.regForm.get('sql')
 }
 get  oracle(){
  return this.regForm.get('oracle')
}
get  nosql(){
  return this.regForm.get('oracle')
}
get  female(){
  return this.regForm.get('female')
}
get  male(){
  return this.regForm.get('male')
}
 login(){
   console.log(this.regForm.value)

}
  constructor() { }

  ngOnInit(): void {
  }

}
