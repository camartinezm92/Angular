import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styles: [
  ]
})
export class LoginPagesComponent {

  constructor( private authService : AuthService,
                private router : Router,
              ){}

  onLogin():void{
    this.authService.login('camilo@gmail.com','123456789')
    .subscribe(user =>{
      this.router.navigate(['/'])

    })

  }
}
