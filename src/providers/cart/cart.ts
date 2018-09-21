import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartProvider {

  public cartItems: any[] = [];

  constructor(public http: HttpClient) {
    
  }

  addItemInCart(item)
  {
    this.cartItems.unshift(item); 
    console.log(this.cartItems);
  }

  removeItemInCart(index)
  {
    this.cartItems.splice(index,1);
  }

  clearCart()
  {
    this.cartItems = [];
  }

}
