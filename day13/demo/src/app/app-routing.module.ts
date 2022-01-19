import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './Guards/auth.guard';
import { DeactiveGuard } from './Guards/deactive.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegsComponent } from './regs/regs.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canDeactivate:[DeactiveGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'regs',component:RegsComponent,canDeactivate:[DeactiveGuard]},
  {path:'',redirectTo:'users', pathMatch:'full'},
  {path:'**',component:AboutComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
