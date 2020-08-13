import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public hide = true;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit_form(){
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe((response: any) => {
      if (response.accessToken){
        localStorage.setItem('auth_token', response.accessToken);
        this.tokenStorageService.saveUser({
          username: response.username,
          skillTitle: response.skillTitle,
          profileImage: response.profileImage
        });
        this.router.navigate(['/admin']);
      }
    });
  }

}
