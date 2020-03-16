import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MoreInfoComponent } from './more-info/more-info.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'info', component: MoreInfoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
