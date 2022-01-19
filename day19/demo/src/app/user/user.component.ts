import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  count=0
  mySub: Subscription = new Subscription
  

  constructor() { }
 
 
  ngOnInit(): void {
    const promise=new Promise(resolve=>{
      setTimeout(() => {
        console.log('Data from promise')
      },1000);
     
    })
    //listening the promises
    promise.then(result=>{console.log(result)
    })
  


  //observable

  const observable=new Observable(sub=>{
    console.log('Observable has been called')


    setInterval(() => {
    //  sub.next( this.count++)
      sub.next(" from observable data "+this.count++)
      // sub.next("data2 from observable"+this.count)
    },1000 );
    sub.error("not solved")
  })
 
this.mySub=observable.subscribe(result=>{
  console.log(result);
})
}

ngOnDestroy(): void {
  this.mySub.unsubscribe()
}
}
