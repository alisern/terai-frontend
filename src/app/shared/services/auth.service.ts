import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:5000/api/auth/";
  changePasswordUrl = "http://localhost:4200/change-password";
  employersUrl = "http://localhost:5000/api/employers/";
  confirmEmailUrl ="test.com";

  constructor(private http:HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.result.succeeded) {
          localStorage.setItem('token', user.token);
        }
      })
    )
  }
  register(model: any) {
    let headers = new HttpHeaders({
      'confirmEmailUrl': this.confirmEmailUrl
    });
    let options = { headers: headers };
    return this.http.post(this.employersUrl + 'create', model, options);
  }

  resetPassword(model: any) {
    let headers = new HttpHeaders({
      'changePasswordUrl': this.changePasswordUrl
    });
    let options = { headers: headers };
    return this.http.post(this.authUrl + 'resetPassword', model, options);
  }
  changePassword(model: any)
  {
    return this.http.post(this.authUrl+'changepassword',model);
  }
}
