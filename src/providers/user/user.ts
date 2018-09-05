import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'No-Auth'
  })
};


@Injectable()
export class UserProvider {

  public url:string = "http://dev.ccart.test/api/user";

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

    this.http.post( this.url + "/login", body, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }

  signup( credentials  ) {
    let body = { 
        firstname : credentials.fname,
        lastname : credentials.lname,
        phone_number : credentials.phone_number,
        username : credentials.username,
        password : credentials.password
    };

    this.http.post( this.url , body, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }

}
