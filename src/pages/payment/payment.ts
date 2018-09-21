import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { OrderSummaryPage } from '../order-summary/order-summary';
import { IOrder } from '../../interface/order';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  // public qrId;
  public paymentData:IOrder;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.paymentData = this.navParams.data;
    // this.qrId = this.guid();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PaymentPage');
  }

  // guid() {
  //   return new Date().getUTCMilliseconds();
  // }
  
  proceedToCheckOut() {
    let transactionData = {
      product_id: this.paymentData.product_id,
      name: this.paymentData.name,
      qty: this.paymentData.qty,
      price: this.paymentData.price,
      total: this.paymentData.qty * this.paymentData.price
    }

    let modal = this.modalCtrl.create(OrderSummaryPage,{ data: transactionData });
    modal.present();
  }
  

}
