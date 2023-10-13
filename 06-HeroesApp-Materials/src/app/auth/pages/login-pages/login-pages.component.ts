import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styles: [
  ]
})
export class LoginPagesComponent {

  constructor( private authService : AuthService){}

  onLogin():void{
    this.authService.login('camilo@gmail.com','123456789')
    .subscribe()

  }
}
