import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  getData(){
    return [
      {name:'Uma',dept:'Math',id:101},
     {name:'Seema',dept:'CS',id:102},
      {name:'Sapna',dept:'CS',id:103}
    ]
  }
  constructor() { }
}
