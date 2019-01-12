import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { UrlService } from './shared/url.service';
import { UserService} from './shared/user/user.service';
=======
import { KeyComponent } from './key/key.component';
import { KeyServiceService } from './key-service.service';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 76af4c7a70a6fa20004efb14243188362109e4e7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    LoginComponent,
    KeyComponent
>>>>>>> 76af4c7a70a6fa20004efb14243188362109e4e7
  ],
  imports: [
  RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
<<<<<<< HEAD
  providers: [
      UrlService,
      UserService
  ],
=======
  providers: [KeyServiceService],
>>>>>>> 76af4c7a70a6fa20004efb14243188362109e4e7
  bootstrap: [AppComponent]
})
export class AppModule { }
