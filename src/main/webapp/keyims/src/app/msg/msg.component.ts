import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/message/message.service';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from '../shared/user/user';
import { Message } from '../shared/message/message';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
    public msgs: Array<any>;
    msglist: any;
    public loggedMsg: Message;
    public sendTo: User;
    public sendFrom: User;
    public detail: string;

  constructor(private messageService: MessageService, private userService: UserService, private http: HttpClient) { }

  ngOnInit() {

  }

  getMsg(): void {
      (<HTMLButtonElement>document.getElementById('getMsg')).disabled = true;

      this.msglist = document.getElementById('inbox');

      this.http.get<any>('/keyims/msg').subscribe((data: Array<any>) => {
          this.msgs = data;

          if (data) {

            const tr = document.createElement('tr');
            let td;
            console.log('msgs length: ' + this.msgs.length);

            for (let i = 0; i < this.msgs.length; i++) {
                console.log('i: ' + i);
                console.log(this.msgs);
              if (this.userService.getUser().id === this.msgs[i].receiver.id) {
                  console.log(this.msgs[i]);
                td = document.createElement('td');
                td.innerHTML = this.msgs[i].sender.name;
                tr.appendChild(td);
                td = document.createElement('td');
                td.innerHTML = this.msgs[i].content;
                tr.appendChild(td);

                td = document.createElement('td');
                const btn = document.createElement('button');
                tr.appendChild(td);
                td.appendChild(btn);
                btn.innerHTML = 'Reply';
                btn.id = 'view' + this.msglist.id;
                btn.addEventListener('click', this.sendMsg);

                this.msglist.appendChild(tr);
              }
            }
        }
      });

  }

  sendMsg(): void {
     // send msg
     console.log('sendMsg');
     this.sendFrom = this.userService.getUser();
     // sendTo needs to be a user
     console.log('sendFrom: ' + this.sendFrom + ' sendTo: ' + this.sendTo + ' detail: ' + this.detail);
     this.messageService.sendMsg(this.sendFrom, this.sendTo, this.detail).subscribe(
         msg => {
             this.loggedMsg = msg;
             console.log(this.loggedMsg);
         });
  }

  getUser(): User {
      // Get current user
      return this.userService.getUser();
    }

  logout(): void {
        this.userService.logout().subscribe();
    }

}
