import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,ViewChild {
  // result:any
  output:any
  value:any
 @ViewChild("button")
  name!: ElementRef;
  
  CreateId(){
this.value=this.name.nativeElement.value;
const char=this.value;
let first="TY";
let third="Com";
let final="";
for(let i=0;i<3;i++)
{
  final=final+char[i];
}
const randomv=Math.floor(Math.random()*1000);
    first=first+final+third+randomv;
    console.log(first)
    this.output=first;

  
  }
  constructor(private user:UserServiceService) { }
  descendants: boolean = false;
  emitDistinctChangesOnly: boolean = false;
  first: boolean = false;
  read: any;
  isViewQuery: boolean = false;
  selector: any;
  static?: boolean | undefined;


  ngOnInit(): void {
    
  }


}

