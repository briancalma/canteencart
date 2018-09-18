import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-meal-information',
  templateUrl: 'meal-information.html',
})
export class MealInformationPage {

  public meal;

  public quantity: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.meal = navParams.get('data');
 
  }

  ionViewDidLoad() {

  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();
  }

  subtractQuantity() {
    this.quantity--;
  }

  addQuantity() {
    this.quantity++;
  }

  showPaymentPage() {
    this.navCtrl.push(PaymentPage, {
      name: this.meal.name,
      price: this.meal.retail_price,
      quantity: this.quantity
    });
  }

}
