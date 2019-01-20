import { Component } from '@angular/core';
import { KeyComponent } from './key/key.component';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from './shared/user/user';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'KeyIMS';
  
   constructor(private userService: UserService, private router:Router) { }
  logout()
  {
  	(<HTMLButtonElement>document.getElementById("auditbutt")).hidden = true;
  	(<HTMLButtonElement>document.getElementById("out")).hidden = true;
      this.userService.logout().subscribe(data =>{this.router.navigate(['/login']);});
  }
}
