import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {
@Input() childVal:any
  constructor() { }

  ngOnInit(): void {
  }

}
 