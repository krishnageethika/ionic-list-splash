import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';

//ionic pages
// ionic native apis


//lottie
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp), 
    LottieAnimationViewModule.forRoot(),

  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    FileTransfer,
    Keyboard,
    SplashScreen,
  //  {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
