import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
 @Input() name:any
  constructor() {
    console.log('Constructor is called first')
  
   }
   ngOnChanges(changes: SimpleChanges): void {
       console.log('Simple cahnges has done here')
   }

  ngOnInit(): void {
    console.log('On init has been called ')
  }

}
