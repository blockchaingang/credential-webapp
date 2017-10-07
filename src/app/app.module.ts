import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
//import {QRCodeComponent} from 'ng2-qrcode';

import {RegistrationService} from 'app/register/registration.service';
import {LoginService} from 'app/login/login.service';

import {AppComponent} from './app.component';
import {NavComponent} from 'app/nav/nav.component';
import {FooterComponent} from 'app/footer/footer.component';
import {WelcomeComponent} from 'app/welcome/welcome.component';
import {RegisterComponent} from 'app/register/register.component';
import {IDCardComponent} from 'app/idcard/idcard.component';
import {LoginComponent} from 'app/login/login.component';
import {ManageComponent} from 'app/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    RegisterComponent,
    IDCardComponent,
    LoginComponent,
    ManageComponent/*,
    QRCodeComponent
    */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register/idcard',
        component: IDCardComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      }
    ])
  ],
  providers: [RegistrationService, LoginService, {provide: Window, useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
