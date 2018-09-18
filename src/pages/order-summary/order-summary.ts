import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController  } from 'ionic-angular';

/**
 * Generated class for the OrderSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html',
})
export class OrderSummaryPage {

  public purchaseData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.purchaseData = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSummaryPage');
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
    
    // TODO: Send Data to the server
  }

  

}
