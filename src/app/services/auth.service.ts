import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*   private commonURL = " https://route-egypt-api.herokuapp.com/" */
  public isLoggedIn = false;
  constructor(private _http: HttpClient) {}

  register(data: any): Observable<any> {
    console.log(data);
    return this._http.post(
      `https://route-egypt-api.herokuapp.com/signup`,
      data
    );
  }

  login(data: any): Observable<any> {
    return this._http.post(
      `https://route-egypt-api.herokuapp.com/signin`,
      data
    );
  }

  logout(): Observable<any> {
    return this._http.post(
      `https://route-egypt-api.herokuapp.com/signOut`,
      null
    );
  }
}
