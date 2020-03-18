import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationFormComponent,
    MoreInfoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
