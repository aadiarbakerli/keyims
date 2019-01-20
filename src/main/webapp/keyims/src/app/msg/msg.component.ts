import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from '../shared/user/user';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
    public msgs: Array<any>;
    public msglist: any;
    public uList: Array<any>;
    public sendTo: User;
    public sendFrom: User;
    public detail: string;

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {

  }

  cancel(): void {
      let dial = (<HTMLDialogElement>document.getElementById('msg'));
      dial.style.display = 'none';

      dial = (<HTMLDialogElement>document.getElementById('reply'));
      dial.style.display = 'none';
  }

  newMsg(): void {
      const dial = (<HTMLDialogElement>document.getElementById('msg'));
      dial.style.display = 'block';

      const usersL = document.getElementById('uList');
      this.http.get('/keyims/userserv').subscribe((users: Array<any>) => {
          this.uList = users;

          for (let i = 0; i < this.uList.length; i++) {
              const opt = document.createElement('option');
              opt.innerHTML = this.uList[i].id + ': ' + this.uList[i].name;
              opt.value = this.uList[i].id;
              usersL.appendChild(opt);
            }
        });

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
              if (this.userService.getUser().id === this.msgs[i].receiver) {
                  console.log(this.msgs[i]);
                this.http.get('/keyims/userserv').subscribe((users: Array<any>) => {
                this.uList = users;

                for (let j = 0; j < this.uList.length; j++) {
                    if (this.uList[j].id === this.msgs[i].sender) {
                        const name = this.uList[j].name;

                        td = document.createElement('td');
                        td.innerHTML = name;
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = this.msgs[i].content;
                        tr.appendChild(td);

                        td = document.createElement('td');
                        const btn = document.createElement('button');
                        tr.appendChild(td);
                        td.appendChild(btn);
                        btn.innerHTML = 'Reply';
                        btn.id = 'view' + this.msgs[i].sender;
                        btn.addEventListener('click', this.replyMsg);

                        this.msglist.appendChild(tr);
                        const linebreak = document.createElement('br');
                        this.msglist.appendChild(linebreak);
                    }
                }

              });
            }
        }
        }
      });

  }

  sendMsg(): void {
     // send msg
     console.log('sendMsg');
     this.sendFrom = this.userService.getUser();
     const usersL = (<HTMLSelectElement>document.getElementById('uList'));
     const uid = usersL.options[usersL.selectedIndex].value;

     console.log('sendFrom: ' + this.sendFrom.id + ' sendTo: ' + uid + ' detail: ' + this.detail);
     this.http.post('/keyims/msg', this.sendFrom.id + '&' + uid + '&' + this.detail).subscribe(
         msg => {

         });
    const dial = (<HTMLDialogElement>document.getElementById('msg'));
    dial.style.display = 'none';
  }

  replyMsg(): void {
      // reply msg
      console.log('replyMsg');

      const dial = (<HTMLDialogElement>document.getElementById('reply'));
      dial.style.display = 'block';

      const btn = event.target;
      console.log(btn);



  }
  getUser(): User {
      // Get current user
      return this.userService.getUser();
    }

  logout(): void {
        this.userService.logout().subscribe();
    }

}
