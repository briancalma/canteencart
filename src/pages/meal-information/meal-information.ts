import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
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
    // let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();
  }

  subtractQuantity() {
    this.quantity--;
  }

  addQuantity() {
    this.quantity++;
  }

}
