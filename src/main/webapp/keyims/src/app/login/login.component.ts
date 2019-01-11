import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
<<<<<<< HEAD
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
=======
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

>>>>>>> 76af4c7a70a6fa20004efb14243188362109e4e7
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
// login(): void{
//    console.log(this.username+' '+this.password);
// }
=======

>>>>>>> 76af4c7a70a6fa20004efb14243188362109e4e7
}
