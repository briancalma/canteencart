import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { UserProvider } from '../../providers/user/user';
import { IResponse } from '../../interface/response';
import { HomePage } from '../home/home';
import { IProfile } from '../../interface/profile';

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

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public toastCtrl: ToastController) {
    // userProvider.getAllUsers();
  }

  // Attempt to login in through our User service
  doLogin() {
    this.userProvider.login( this.account )
    .subscribe((data: IResponse) => { 
      
      let profile:IProfile = data.user_data;

      if( data.result === "success" ) {
        // Process of saving the user account
        this.userProvider.user.username = this.account.username;
        this.userProvider.user.isLoggedIn = true;
        this.userProvider.user.user_id = profile.id;    
        this.userProvider.saveUserAccount();
        
        // Navigating to the home page
        this.navCtrl.setRoot(HomePage);
      } else {
        // alert(data.message);
        let toast = this.toastCtrl.create({ message: 'Username and Password Does not exist!', showCloseButton: true });
        toast.present();
        this.account.username = "";
        this.account.password = "";
      }
    })
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }

}
