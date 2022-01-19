import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  name:any
value=true
toggleCase(){
this.value=!this.value
}


  constructor() { }

  ngOnInit(): void {
  }

}
