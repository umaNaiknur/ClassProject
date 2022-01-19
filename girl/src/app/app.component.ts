import { Component } from '@angular/core';
import { umask } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'girl';
  val="hello I'am Uma"
  displayResult='';
 isSpecial:boolean=true
 c1="green"
 c2="red"

 //value=true
 //  onsubmit(){
   //  this.value=!this.value
//  }
  display(){
    console.log('Inside the display Window')
  }

//   users: any=[
//     {name:'uma',age:25 ,id:101},
//     {name:'suma',age:24,id:102},
//     {name:'hebsy',age:26 ,id:108},
//   ]


//   val3=false
// onSubmit1(){
//   this.val3=!this.val3
// }




// arr1:any=[
//   {name:'uma',age:25,gender:'female'},
//   {name:'Suma',age:22,gender:'female'}
// ]
//   selectedCountry="India"
}


