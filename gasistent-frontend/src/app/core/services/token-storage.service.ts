import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const ADMIN_KEY = 'auth-admin';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(admin){
    window.sessionStorage.removeItem(ADMIN_KEY);
    window.sessionStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  }

  public getUser(){
    return JSON.parse(sessionStorage.getItem(ADMIN_KEY));
  }
}
