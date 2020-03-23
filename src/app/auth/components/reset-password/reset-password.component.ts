import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmit(f: NgForm) {
    const resetPasswordObserver = {
      next: x => console.log('Check email to change password'),
      error: err => console.log(err)
    };
this.authService.resetPassword(f.value).subscribe(resetPasswordObserver);
    //this.authService.resetPassword(f.value).subscribe(resetPasswordObserver);}

  // register(model: any) {
  //   let headers = new HttpHeaders({
  //     'changePasswordUrl': this.changePasswordUrl
  //   });
  //   let options = { headers: headers };
  //   return this.http.post(this.authUrl + 'resetpassword', model, options);
}}
