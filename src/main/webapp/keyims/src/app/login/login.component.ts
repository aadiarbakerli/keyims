import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from '../shared/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loggedUser: User;
    public username: string;
    public password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.login(null, null).subscribe( user => {
          this.loggedUser = user;
          console.log(this.loggedUser);

      });
  }
  login(): void {
      console.log(this.username + ' ' + this.password);
      this.userService.login(this.username, this.password).subscribe(
          user => {
              this.loggedUser = user;
          document.getElementById("logout").innerHTML = JSON.stringify(user);
          console.log(document.getElementById("logout"));
            console.log(user);
          });
  }
  logout(): void {
      this.userService.logout().subscribe();
      this.loggedUser = null;
      this.username = null;
      this.password = null;
  }

  getUser(): User {
      return this.userService.getUser();
  }
}
