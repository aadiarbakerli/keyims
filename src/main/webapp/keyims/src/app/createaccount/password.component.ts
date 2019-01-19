import { Component, OnInit } from '@angular/core';
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-pass',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {

  private passwordDOM: HTMLElement;
  // private currentPassScore : number;
  public password: string;

  constructor() {

  }

  ngOnInit() {
    // this.currentPassScore = 0;
    this.passwordDOM = document.getElementById('passwordfield'); 
        // todo change to whatever passwordfield is
    console.log("init of pw checker");
  }

  addEvent() {    //or subscribe to observable in create acc imp.
    this.passwordDOM.addEventListener('onchange', this.checkPassword);
    console.log("added event listener to pw");
  }

  checkPassword() : number{
    // let currentPass = this.passwordDOM.innerHTML;
    // let currentPass = this.password;
    // if (currentPass.length >= 8){
      if (this.password != null && this.password.length >= 8) {
      // let result = zxcvbn(currentPass).score;
      let result = zxcvbn(this.password).score;
      console.log("pw score: " + result);
      // this.currentPassScore = result;
      return result; 
    }
    return 0;
  }
}