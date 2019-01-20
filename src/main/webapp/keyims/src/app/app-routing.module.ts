import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KeyComponent } from './key/key.component';
import { MsgComponent } from './msg/msg.component';
import { PasswordComponent } from './createaccount/password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    // redirectTo: '/login',
    // pathMatch: 'full'
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'msg',
    component: MsgComponent
  },
  {
    path: 'key',
    component: KeyComponent
  },
  {
    path: 'passStr',
    component: PasswordComponent
  }
  //{ path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }