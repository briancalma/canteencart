import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import { OrderSummaryPage } from '../order-summary/order-summary';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartCtrl: CartProvider, public modalCtrl: ModalController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }


  order() {
    let modal = this.modalCtrl.create(OrderSummaryPage,{ data: this.cartCtrl.cartItems });
    modal.present();
    // console.log(this.cartCtrl.cartItems);
    
  }
}
