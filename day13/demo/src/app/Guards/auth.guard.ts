import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authservice:AuthService){}
  canActivate(){
    if(this.authservice.isLoggedin()){
      alert('You Are loggen in Successfully!!!');
      

      return true
    }
    else{
      window.alert('You need to login into this page!!!');
      return false
    }
  }
    
   
  
  
}
