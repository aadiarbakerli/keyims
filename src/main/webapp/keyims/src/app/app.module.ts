import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { LoginComponent } from './login/login.component';

import { UrlService } from './shared/url.service';
import { UserService} from './shared/user/user.service';

import { CreateuserComponent } from './createuser/createuser.component';
import { KeyServiceService } from './key-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MsgComponent } from './msg/msg.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeyComponent,
    MsgComponent,
    CreateuserComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      UrlService,
      UserService,
      KeyServiceService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
