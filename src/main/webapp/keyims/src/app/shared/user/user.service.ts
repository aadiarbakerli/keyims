import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CurrentUser } from './CurrentUser';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private appUrl = this.urlSource.getURL() + '/login';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  login(username: string, password: string): Observable<CurrentUser> {
      if (username && password) {
          const body = `{"email": "${username}", "pswd": "${password}"}`;
          console.log(body);
          return this.http.post(this.appUrl, body, {headers: this.headers, withCredentials: true})
          .pipe(map(resp => {
              const user: CurrentUser = resp as CurrentUser;
              if (user) {
                  return user;
              }
          }));
      } else { // check if logged in
          return this.http.get(this.appUrl, {withCredentials: true})
          .pipe(map(resp => {
              const user: CurrentUser = resp as CurrentUser;
              if (user) {
                  return user;
              }
          }));
      }
  }
  logout(): Observable<Object> {
      return this.http.delete(this.appUrl, { withCredentials: true}).pipe(
          map(success => {
              return success;
          })
      );
  }
}
