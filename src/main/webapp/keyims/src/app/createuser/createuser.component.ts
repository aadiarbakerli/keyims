import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventManager } from '@angular/platform-browser'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UrlService } from '../shared/url.service';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from '../shared/user/user';
import {Router} from "@angular/router";
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  // public id: number;
  public firstName: string;
  public lastName: string;

  public email: string;
  public pswd: string;
  // public lvl: number;
  public loggedUser: User;
  private passwordDOM: HTMLElement;
  private buttonDisabled: boolean;

  constructor(private userService: UserService, private router: Router)
  {
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.passwordDOM = document.getElementById('passwordfield');
    this.buttonDisabled = true;
    console.log("init of pw checker");

    this.userService.login(null, null).subscribe( user => {
      this.loggedUser = user;
      console.log(user);
  });
  }
  addEvent() {    //or subscribe to observable in create acc imp.
    this.passwordDOM.addEventListener('onchange', this.checkPassword);
    console.log("added event listener to pw");
  }
  checkPassword() : number{
    // && this.pswd.length >= 8
      if (this.pswd != null) {
      let result = zxcvbn(this.pswd).score;
      console.log("pw score: " + result);
      if (result >= 2){
        this.buttonDisabled = false;
      } else {
        this.buttonDisabled = true;
      }
      console.log(this.buttonDisabled);
      return result; 
    }
    return 0;
  }

  //todo test if actually logs in later
  onSubmit(): void {
    console.log("Posting...");
    const name = this.firstName + ' ' + this.lastName;
    this.userService.createUser(name,this.pswd,this.email).subscribe(
      user => {
          this.loggedUser = user;
          console.log("logged user: " + this.loggedUser);
          console.log('createUser');
          console.log(user);

          (<HTMLButtonElement>document.getElementById("create")).hidden = true;

        this.router.navigate(['/key']);
      });
  }
}