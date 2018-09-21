import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController  } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';
import { UserProvider } from '../../providers/user/user';
import { IOrder } from '../../interface/order';
import { ITransaction } from '../../interface/transaction';
import { CartProvider } from '../../providers/cart/cart';


@IonicPage()
@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html',
})
export class OrderSummaryPage { 

  public purchaseData:IOrder[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public orderCtrl: OrderProvider, public userCtrl: UserProvider, public cartCtrl: CartProvider) {
    this.purchaseData = navParams.get('data');
    // console.log(this.purchaseData);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrderSummaryPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait passing your order to the server, after this you can go to the transaction page.',
      duration: 5000
    });

    loading.onDidDismiss(() => {
      this.navCtrl.popAll();
      
    });

    loading.present();

    let orderData: ITransaction = {
      orders: this.purchaseData ,
      user_id: this.userCtrl.user.user_id
    }; 

    this.orderCtrl.sendOrderToServer(orderData); 
    this.cartCtrl.clearCart();
    // TODO: Send Data to the server
  }

  

}
