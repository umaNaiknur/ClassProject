 import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterViewChecked{
// @Input() product:any
counter:number=0
interval:any
@Input() name1: any;
 
  @ContentChild("header",{static:true})element:any
  
  constructor() { 
  console.log("im the constructor"+this.element)
  }

  ngOnInit(): void {
    console.log('child oninit has been called'+this.element)
    // this.interval= setInterval(()=>{
    //   this.counter++
    //   console.log(this.counter)
    // },3000)
  } 


ngOnChanges(changes: SimpleChanges): void {
  console.log('Child conponent  changed'+this.element)
  
}
ngDoCheck(): void {
    console.log('checked')
}

  ngAfterViewChecked(): void {
     console.log('View is called') 
  }
ngAfterContentInit():void{
  console.log('Content init is called')
}
ngOnDestroy(): void {
  console.log('Child component has been destroyed')
  // clearInterval(this.interval)
    
}
}


