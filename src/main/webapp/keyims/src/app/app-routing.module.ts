import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KeyComponent } from './key/key.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { MsgComponent } from './msg/msg.component';

const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'key',
    component: KeyComponent
  },
  {
    path: 'msg',
    component: MsgComponent
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
