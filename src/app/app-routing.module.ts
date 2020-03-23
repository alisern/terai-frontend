import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import{RegisterComponent}from './auth/components/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: 'registration', component: RegistrationFormComponent},
  {path: 'test', component: TestComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
