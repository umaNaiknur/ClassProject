import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegsComponent } from './regs/regs.component';
import { AuthGuard } from './Guards/auth.guard';
import { DeactiveGuard } from './Guards/deactive.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    LoginComponent,
    ContactUsComponent,
    RegistrationComponent,
    RegsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,DeactiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
