import { RegisterComponent } from './register/register.component';
import { LoginPasswordComponent } from './login-password/login-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'login-password', component: LoginPasswordComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
