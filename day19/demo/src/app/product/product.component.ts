import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  users=[
    {name:'Uma',city:'Dharwad',id:101,salary:30000,DOB:new Date("24 may 1996")},
    {name:'Seema',city:'Mysore',id:102,salary:25000,DOB:new Date("09 nov 1998")},
    {name:'Sapna',city:'Bangalore',id:103,salary:40000,DOB:new Date("20 jul 1996")},
    {name:'Madhu',city:'Delhi',id:104,salary:55000,DOB:new Date("21 may 1991")},
    {name:'Sudha',city:'Balagavi',id:105,salary:48000,DOB:new Date("03 mar 1993")}
  ]
  constructor() { }

  ngOnInit(): void {
  }
                                                                                                                                                                                                                                                                                
}
