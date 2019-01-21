import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KeyComponent } from './key/key.component';
import { UserComponent } from './user/user.component';
import { CreateuserComponent } from './createuser/createuser.component';

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
    path: 'user',
    component: UserComponent
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
