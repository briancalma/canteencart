import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: 'root192168',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    // userProvider.getAllUsers();
  }

  // Attempt to login in through our User service
  doLogin() {
    this.userProvider.login( this.account );
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }

}
