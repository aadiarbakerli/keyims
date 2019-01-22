import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private appUrl = this.urlSource.getURL() + '/login';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    public current: User;

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
      if (username && password) {
          const body = `{"email": "${username}", "pswd": "${password}"}`;
          console.log(body);
          return this.http.post(this.appUrl, body, {headers: this.headers, withCredentials: true})
            .pipe(map(resp => {
              const user: User = resp as User;
              if (user) {
                  this.current = user;
                  console.log('userservice login');
                  console.log(this.current);
              }
              return user;
          }));
      } else { // check if logged in
          return this.http.get(this.appUrl, {withCredentials: true})
            .pipe(map(resp => {
              const user: User = resp as User;
              if (user) {
                this.current = user;
              }
              return user;
          }));
      }
  }
  
   createUser(name: string, pswd: string, email: string): Observable<User> {
    const body = `{"name": "${name}", "email": "${email}", "pswd": "${pswd}"}`;
    console.log("log body" + body);
    return this.http.post(this.appUrl + '/createuser', body, 
        {headers: this.headers, withCredentials: false}).pipe(map(resp => {
            const user: User = resp as User;
            console.log("piped user: " + user)
            if (user) {
                this.current = user;
                console.log('userservice createuser');
                console.log(this.current);
            }
            console.log("user: " + user)
            return user;
    }));
  }
  
  logout(): Observable<Object> {
      return this.http.delete(this.appUrl, { withCredentials: true}).pipe(
          map(success => {
              this.current = null;
              return success;
          })
      );
  }
  getUser(): User {
      return this.current;
  }
  isUser(): boolean {
      return (this.current !== undefined && this.current !== null);
    }
}
