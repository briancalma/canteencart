import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the TransactionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionProvider {

  public transactions:any[] = [];

  public key = 'transactions';

  constructor(public http: HttpClient, public storageCtrl: Storage) {
    // this.initiateTransactionRecords();
  }

  initiateTransactionRecords()
  {
     this.isKeyDoExist(this.key)
      .then( (val) => {
        if(val !== null) {
          // Key Exist
          this.storageCtrl.get(this.key)
            .then( (val) => { 
                this.transactions = val;
                console.log('The Key: ' + this.key + ' has value of : ' , val);
            });  
        } else {
          // setting a default value to the key
          console.log('There is no transaction found initiating to default values');
          
          this.setStorageItem(this.key,this.transactions);
        } 
      });
  }

  isKeyDoExist(key) 
  {
    return this.storageCtrl.get(key);
  }

  setStorageItem(key, val)
  {
    this.storageCtrl.set(key,val);
  }

  saveTransactionRecords() 
  {
    // Saved the locally transaction array in this provider
    this.setStorageItem(this.key, this.transactions);
  }

  addNewTransaction(transaction) 
  {
    console.log('Adding a new transaction :', transaction);
    // Insert a new transaction record to the start of the array
    this.transactions.unshift(transaction)

    // Saving the transaction records once again
    this.saveTransactionRecords();
  }

  getAllTransactions() 
  {
    return this.transactions;
  }


}
