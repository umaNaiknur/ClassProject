import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Output() message:EventEmitter<string>= new EventEmitter<string>()
passData(){
  this.message.emit('This is to pass the data from the child to parent');
}
  constructor() { }

  ngOnInit(): void {
  }

}
