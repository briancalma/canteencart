import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { MenuProvider } from '../providers/menu/menu';
import { MealInformationPage } from '../pages/meal-information/meal-information';
import { PaymentPage } from '../pages/payment/payment';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { TabsPage } from '../pages/tabs/tabs';
import { CartPage } from '../pages/cart/cart';
import { TransactionPage } from '../pages/transaction/transaction';
import { OrderProvider } from '../providers/order/order';
import { TransactionProvider } from '../providers/transaction/transaction';
import { TransactionDetailPage } from '../pages/transaction-detail/transaction-detail';
import { CartProvider } from '../providers/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MealInformationPage,
    PaymentPage,
    OrderSummaryPage,
    TabsPage,
    CartPage,
    TransactionPage,
    TransactionDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    QRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MealInformationPage,
    PaymentPage,
    OrderSummaryPage,
    TabsPage,
    CartPage,
    TransactionPage,
    TransactionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    MenuProvider,
    OrderProvider,
    TransactionProvider,
    CartProvider
  ]
})
export class AppModule {}
