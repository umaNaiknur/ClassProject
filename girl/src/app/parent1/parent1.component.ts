import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
result:any
getData(value:any){
  this.result=value
}
  constructor() { }

  ngOnInit(): void {
  }

}
