import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeal } from '../../interface/meal';
import { IApiResponse } from '../../interface/apiresponse';

const url: string = "http://dev.ccart.test/api";

@Injectable()
export class MenuProvider {

  public meals: IMeal[] = [
   { name: "Champorado", decription: "Lorem impsum dulum", mealType: "breakfast", price: 10, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/breakfast/champorado.jpg'},
   { name: "Hotsilog", decription: "Lorem impsum dulum", mealType: "breakfast", price: 30, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/breakfast/hotsilog.jpg'}, 
   { name: "Longanisa", decription: "Lorem impsum dulum", mealType: "breakfast", price: 20, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/breakfast/longanisa.jpg'},
   { name: "Omelet", decription: "Lorem impsum dulum", mealType: "breakfast", price: 10, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/breakfast/omelet.jpg'},
   { name: "Waffles", decription: "Lorem impsum dulum", mealType: "breakfast", price: 10, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/breakfast/waffles.jpg'},
   { name: "Adobong Manok", decription: "Sizling Adobo Pork and fied", mealType: "lunch", price: 50, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/lunch/adobo.jpg'},
   { name: "Bicol Express", decription: "Lorem impsum dulum", mealType: "lunch", price: 20, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/lunch/bicol-express.jpg'},
   { name: "Igado", decription: "Lorem impsum dulum", mealType: "lunch", price: 20, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/lunch/igado.jpg'},
   { name: "Kare Kare", decription: "Lorem impsum dulum", mealType: "lunch", price: 20, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/lunch/karekare.jpg'}, 
   { name: "Lumpia", decription: "Lorem impsum dulum", mealType: "lunch", price: 20, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/lunch/lumpia.jpg'},
   { name: "Adobong Pusit", decription: "Lorem impsum dulum", mealType: "dinner", price: 50, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/dinner/adobong-pusit.jpg'},
   { name: "Chicken Teriyaki", decription: "Lorem impsum dulum", mealType: "dinner", price: 50, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/dinner/chicken-teriyaki.jpg'}, 
   { name: "Lumpia", decription: "Lorem impsum dulum", mealType: "dinner", price: 50, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/dinner/lumpia.jpg'},
   { name: "Ribs", decription: "Lorem impsum dulum", mealType: "dinner", price: 50, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/dinner/ribs.jpg'},
   { name: "Tinola", decription: "Lorem impsum dulum", mealType: "dinner", price: 50, status: "AVAILABLE", banner: '../../assets/imgs/thumbs/dinner/tinola.jpg'},
  ];


  constructor(public http: HttpClient) {
    this.getAllMeals();
  }

  getAllMeals() {
    let targetUrl = url + "/products";

    return this.http.get(targetUrl).subscribe((res: IApiResponse) => {
      this.meals = res.data;
    });
  }

}
