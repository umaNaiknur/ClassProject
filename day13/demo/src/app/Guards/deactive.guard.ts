import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { RegsComponent } from '../regs/regs.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<RegsComponent> {
  constructor(){}
  canDeactivate(component:RegsComponent){
    if(component.fname?.dirty){
     return confirm("Are you sure,You want to navigate?")
    }else{
      return false
    }
  }    
    
  }
  

