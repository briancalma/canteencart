import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interface/user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'No-Auth'
  })
};


@Injectable()
export class UserProvider {

  public url:string = "http://dev.ccart.test/api/user";

  public user: IUser = {
    username: "",
    password: "",
    isLoggedIn: false
  };

  constructor(public http: HttpClient) {  
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

}
