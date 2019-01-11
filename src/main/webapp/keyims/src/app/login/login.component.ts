import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
  constructor() { }

  ngOnInit() {
  }
// login(): void{
//    console.log(this.username+' '+this.password);
// }
}
