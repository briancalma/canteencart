import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interface/user';
import { Storage } from '@ionic/storage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'No-Auth'
  })
};


@Injectable()
export class UserProvider {

  // public url:string = "http://178.128.28.26/api/user";

  public url:string = "http://dev.ccart.test/api/user";

  public user: IUser = {
    user_id: 0,
    username: "",
    password: "",
    isLoggedIn: false
  };

  constructor(public http: HttpClient, public storageCtrl: Storage) {  
    this.getUserAccount();
  }


  getAllUsers() {
    this.http.get(this.url).subscribe( (data) => {
      console.log(data);
    });
  }

  login( credentials ) {
    let body = { 
                  username : credentials.username,
                  password : credentials.password
               };

    return this.http.post( this.url + "/login", body, httpOptions);
  }

  signup( credentials  ) {
    let body = { 
        firstname : credentials.fname,
        lastname : credentials.lname,
        phone_number : credentials.phone_number,
        email: credentials.email,
        username : credentials.username,
        password : credentials.password
    };

    return this.http.post( this.url , body, httpOptions);
  }

  saveUserAccount() 
  {
    // Saving the user
    this.user.password = "";
    this.storageCtrl.set('user_account',this.user)
      .then( (res) => {
        console.log('User Account is successfully saved, Account: ', this.user);
      });
  
  }

  checkIfLoginned() 
  {
    // gets the user account key and checks if there is such key
    this.storageCtrl.get('user_account')
      .then( (user: IUser) => {

        // if there is no key this will return false
        if( user == null ) return false;
        
        // if there is a key and the isLoggedIn property is set to true
        // this will return true
        if( user.isLoggedIn ) return true;

        // default will return false
        return false;
      });
  }

  getUserAccount() 
  {
    // gets the user account that is saved 
    // and return it
    
    console.log('Fetching User Account  . . .');
    this.storageCtrl.get('user_account')
      .then( (user) => {
        if(user == null) {  
          // console.log('Account :', user);
          // this.user = user;
          this.setUserAccountToDefault();
        } else {  
          console.log('Account :', user);
          this.user = user;
        }
      });
  }

  destroyUserAccount() 
  {
    // deletes the saved user_account 
    this.storageCtrl.remove('user_account');
  }

  logout() 
  {
    this.destroyUserAccount();
    this.setUserAccountToDefault();
    console.log('You have successfully logout!');
  }

  setUserAccountToDefault() 
  {
    this.user = {
      user_id: 0,
      username: "",
      password: "",
      isLoggedIn: false
    };
  }
  

}
