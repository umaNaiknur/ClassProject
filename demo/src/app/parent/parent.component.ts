import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit {
name:any
// salesProduct=[{name:'uma',age:25,id:101},{name:'seema',age:23,id:102},{name:'sapna',age:20,id:108}]
// marketProduct=[{name:'uma',age:25,id:101},{name:'seema',age:23,id:102},{name:'sapna',age:20,id:108}]
value=true
  // @ViewChild("header",{static:true})
  // elem!: ElementRef<any>
  @ViewChildren("header")
  elem!: QueryList<any>
// contentChild('header',{static:false})element:any
  
toggleChild(){
  this.value=!this.value
}

  constructor() { 
    console.log('Parent Constructor has been created!!!')
  }

  ngOnInit(): void {
    
console.log('Parent Component has been initialized!!!')
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('Parent component has been called')
  }
  ngDoCheck(): void {
      console.log('Component has changed')
  }
  ngAfterViewInit(): void {
      console.log('Parent after view init has been called')
      // console.log(this.elem)
      // this.elem.nativeElement.innerText='Test-Yantra';
      
  }
ngAfterViewChecked(): void {
    console.log('Parent after view checked has been called')
}
ngAfterContentInit(): void {
    console.log('Parent after content init has been called')
}

}
  