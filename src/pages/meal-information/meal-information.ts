import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { IProduct } from '../../interface/product';
import { IOrder } from '../../interface/order';
import { CartProvider } from '../../providers/cart/cart';
import { OrderSummaryPage } from '../order-summary/order-summary';

@Component({
  selector: 'page-meal-information',
  templateUrl: 'meal-information.html',
})
export class MealInformationPage {

  public meal:IProduct;

  public quantity: number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public cartCtrl: CartProvider, 
              public modalCtrl: ModalController,
              public toastCtrl: ToastController) {
    this.meal = navParams.get('data');
    console.log('Data From Meal-Info : ',this.meal);
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

    if(this.quantity > 0)
    {
      let order:IOrder = {
        product_id: this.meal.id,
        name: this.meal.name,
        price: this.meal.retail_price,
        qty: this.quantity
      }
  
      let modal = this.modalCtrl.create(OrderSummaryPage,{ data: [order] });
      modal.present();  
    }
    else 
    {
      this.showErrorToast('Make sure that the quantity is greater than 0');
    }
  
    // this.navCtrl.push(PaymentPage, order);
  }

  addToCart() {

    if(this.quantity > 0)
    {
      let order:IOrder = {
        product_id: this.meal.id,
        name: this.meal.name,
        price: this.meal.retail_price,
        qty: this.quantity
      }

      this.cartCtrl.addItemInCart(order);
      this.viewCtrl.dismiss();
    }
    else 
    {
      this.showErrorToast('Make sure that the quantity is greater than 0');
    }
    
  }

  showErrorToast(msg)
  {
    let toast = this.toastCtrl.create({duration:3000, message: msg, showCloseButton:true});
    toast.present();
  }

}
