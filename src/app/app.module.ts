//pages
import { NotificationPage } from './../pages/notification/notification';
import { SignupPage } from './../pages/signup/signup';
import { ResetPasswordPage } from './../pages/resetpassword/resetpassword';
import { LoginPage } from './../pages/login/login';
//providers
import { Firebase } from './../providers/firebase';
import { Login } from './../providers/login';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {  Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

export function provideStorage() {
  return new Storage(['sqlite', 'indexeddb', 'websql']);
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    NotificationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    NotificationPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Firebase,
    Login,
    { provide: Storage, useFactory: provideStorage }

    ]
})
export class AppModule {}
