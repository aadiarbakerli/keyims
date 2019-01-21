import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from '../shared/user/user';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loggedUser: User;
    public username: string;
    public password: string;
  constructor(private userService: UserService, private router:Router) { }
  ngOnInit() {
<<<<<<< HEAD
     if(document.getElementById("logout").innerHTML.length > 10)
=======
  	if(document.getElementById("logout").innerHTML.length > 10)
>>>>>>> 02f04f45a5ed3b82466a03f6ea23fb4798812807
  		this.router.navigate(['/key']);
  		
      this.userService.login(null, null).subscribe( user => {
          this.loggedUser = user;
          console.log(this.loggedUser);
          
		  if(user != null)
		  	this.router.navigate(['/key']);
      });
  }
  login(): void {
      console.log(this.username + ' ' + this.password);
      this.userService.login(this.username, this.password).subscribe(
          user => {
              this.loggedUser = user;
          document.getElementById("logout").innerHTML = JSON.stringify(user);        
          (<HTMLButtonElement>document.getElementById("out")).hidden = false;
          if(this.loggedUser.lvl >= 1)
          	(<HTMLButtonElement>document.getElementById("auditbutt")).hidden = false;
          
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
