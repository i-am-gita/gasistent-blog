import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { }

  login(credentials: object){
    return this.http.post(this.loginUrl, credentials);
  }

  is_logged_in(){
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return false;
    }
    const isExpired = this.jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['/prijava']);
  }
}
