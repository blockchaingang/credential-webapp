import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {RegistrationService} from '../../../credentialwebapp/src/app/register/registration.service';

import {AppComponent } from './app.component';
import {NavComponent} from '../../../credentialwebapp/src/app/nav/nav.component';
import {FooterComponent} from '../../../credentialwebapp/src/app/footer/footer.component';
import {WelcomeComponent} from '../../../credentialwebapp/src/app/welcome/welcome.component';
import {RegisterComponent} from '../../../credentialwebapp/src/app/register/register.component';
import {LoginComponent} from '../../../credentialwebapp/src/app/login/login.component';
import {ManageComponent} from '../../../credentialwebapp/src/app/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    ManageComponent
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
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'manage',
          component: ManageComponent
        }
    ])
  ],
  providers: [RegistrationService, {provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
