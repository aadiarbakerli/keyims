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
import { KeyServiceService } from './key-service.service';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
=======
import { KeyServiceService } from './key-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UrlService } from './shared/url.service';
import { UserService} from './shared/user/user.service';
import { AuditComponent } from './audit/audit.component';
import { MsgComponent } from './msg/msg.component';

>>>>>>> ccc69752cc8daf3ce3507846ca7efbdeec4b74a4

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeyComponent,
    AuditComponent
    MsgComponent
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
