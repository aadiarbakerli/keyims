import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user/user';
import { Message } from './message';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    private appUrl = this.urlSource.getURL() + '/msg';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    public current: Message;

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  sendMsg(sendFrom: User, sendTo: User, detail: string): Observable<Message> {
      if (sendTo && sendFrom && detail) {
          const body = '{"sender": "${sendFrom}", "receiver": "${sendTo}", "content": "${detail}"}';
          console.log(body);
          return this.http.put(this.appUrl, body, {headers: this.headers, withCredentials: true})
            .pipe(map(resp => {
                const msg: Message = resp as Message;
                if (msg) {
                    this.current = msg;
                    console.log(this.current);
                }
                return msg;
            }));
      }
  }
}
