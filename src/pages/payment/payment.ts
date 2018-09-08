import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public qrId;
  public paymentData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paymentData = this.navParams.data;
    this.qrId = this.guid();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PaymentPage');
  }

  guid() {
    return new Date().getUTCMilliseconds();
  }
  
  

}
