import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { UrlService } from './shared/url.service';
import { UserService} from './shared/user/user.service';
import { KeyComponent } from './key/key.component';
=======

import { UrlService } from './shared/url.service';
import { UserService} from './shared/user/user.service';

>>>>>>> 501b10104a8fe3abb2253b1cc7244d2de068279a
import { KeyServiceService } from './key-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeyComponent
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
<<<<<<< HEAD
=======

>>>>>>> 501b10104a8fe3abb2253b1cc7244d2de068279a
  bootstrap: [AppComponent]
})
export class AppModule { }
