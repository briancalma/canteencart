import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { fname: string, lname: string, username: string, password: string, phone_number: string } = {
    fname: 'John',
    lname: 'Doe', 
    username: 'test@example.com',
    password: 'test',
    phone_number: '0901112311'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,) {
  }

  doSignup() {
    
  }

  goToLogin() {
    this.navCtrl.pop();
  }

}
