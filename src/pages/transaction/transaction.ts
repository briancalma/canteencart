import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TransactionProvider } from '../../providers/transaction/transaction';
import { TransactionDetailPage } from '../transaction-detail/transaction-detail';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public transCtrl: TransactionProvider, public modalCtrl: ModalController) {
  }

  openTransactionDetailsModal( transaction ) {
    let modal = this.modalCtrl.create(TransactionDetailPage, { data : transaction });

    modal.present();
  }

}
