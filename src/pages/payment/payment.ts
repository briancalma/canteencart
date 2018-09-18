import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { OrderSummaryPage } from '../order-summary/order-summary';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public qrId;
  public paymentData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.paymentData = this.navParams.data;
    this.qrId = this.guid();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PaymentPage');
  }

  guid() {
    return new Date().getUTCMilliseconds();
  }
  
  proceedToCheckOut() {
    let transactionData = {
      name: this.paymentData.name,
      quantity: this.paymentData.quantity,
      price: this.paymentData.price,
      total: this.paymentData.quantity * this.paymentData.price
    }

    let modal = this.modalCtrl.create(OrderSummaryPage,{ data: transactionData });
    modal.present();
  }
  

}
