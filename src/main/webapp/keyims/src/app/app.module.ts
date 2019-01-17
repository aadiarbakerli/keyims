import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UrlService } from './shared/url.service';
import { UserService} from './shared/user/user.service';
import { KeyComponent } from './key/key.component';
import { KeyServiceService } from './key-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeyComponent,
    CreateuserComponent
  ],
  imports: [
  RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      UrlService,
      UserService,
      KeyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
