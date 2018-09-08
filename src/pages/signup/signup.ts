import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { IResponse } from '../../interface/response';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { fname: string, lname: string, email: string, username: string, password: string, phone_number: string } = {
    fname: 'John',
    lname: 'Doe', 
    email: 'test@example.com',
    username: '',
    password: 'test',
    phone_number: '0901112311'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public toastCtrl: ToastController) {
  }

  doSignup() {
    this.userProvider.signup(this.account).subscribe( (res: IResponse) => {
      if(res.result == "success") {
        let toast = this.toastCtrl.create({message: res.message});
        toast.present();
        this.userProvider.user.username = this.account.username;
        this.userProvider.user.isLoggedIn = true;
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

  goToLogin() {
    this.navCtrl.pop();
  }

}
