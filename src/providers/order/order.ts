import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransaction } from '../../interface/transaction';
import { Storage } from '@ionic/storage';
import { TransactionProvider } from '../transaction/transaction';
import { IApiResponse } from '../../interface/apiresponse';


/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(public http: HttpClient, public strogeCtrl: Storage, public transactionCtrl: TransactionProvider) {
    // console.log('Hello OrderProvider Provider');

  }


  sendOrderToServer( data: ITransaction ) {
    
    // let orderDetail = {
    //   orders: data.orders,
    //   user: data.user_id
    // };

    // console.log(data);

    this.http.post('http://dev.ccart.test/api/transaction',data)
      .subscribe( (res: IApiResponse) => {
        console.log("Response From Server Transaction Data: ",res);
        // Adding the new transaction 
        this.transactionCtrl.addNewTransaction(res.data);
      });
  }

}
