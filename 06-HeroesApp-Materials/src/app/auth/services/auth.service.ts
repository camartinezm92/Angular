import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUlr = environments.baseUrl;
private user? : User;

  constructor( private http:HttpClient) { }

  get currentUser ():User|undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user)
  }

  login (email:string, pswd: string): Observable<User>{
    return this.http.get<User>(`${this.baseUlr}/users/1`)
    .pipe(
      tap( user => this.user = user),
      tap( user => localStorage.setItem('token', user.id.toString())),
    )
  }
}