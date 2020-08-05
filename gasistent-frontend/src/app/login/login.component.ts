import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public hide: boolean = true;

  constructor(private auth_service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit_form(){
    let credentials = {
      username: this.username,
      password: this.password
    }

    this.auth_service.login(credentials).subscribe((response: any) => {
      if(response.token){
        localStorage.setItem('auth_token', response.token);
        this.router.navigate(['/admin-components']);
      }
    })
  }

}
