import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KeyComponent } from './key/key.component';
import { AuditComponent } from './audit/audit.component';

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
  	path: 'audit',
  	component: AuditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
