import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
