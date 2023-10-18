import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map, of, tap } from 'rxjs';

import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';

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
      tap( user => localStorage.setItem('token', 'aoifnoafn.aoignoimbvo.aofimagingiuifj')),
    )
  }

  checkAutentications(): Observable<boolean> | boolean {
    if (!localStorage.getItem('token')) return false;

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUlr}/user/1`)
    .pipe(
      tap(user => this.user = user),
      map(user => !!user),
      catchError(err => of(false))
    );
  }

  logout():void{
    this.user = undefined
    localStorage.clear();
  }
}
