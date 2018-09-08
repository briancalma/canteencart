import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { MealInformationPage } from '../meal-information/meal-information';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { IApiResponse } from '../../interface/apiresponse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController, 
               public menuProvider: MenuProvider, 
               private modalCtrl: ModalController,
               public userProvider: UserProvider
             ) {
                  
               }

  openMealInfoModal( meal ) { 

    if(this.userProvider.user.isLoggedIn) {
      let modal = this.modalCtrl.create(MealInformationPage, { data: meal });
      modal.onDidDismiss(data => {
        console.log(data);
      });
      modal.present();
    } else {
      this.navCtrl.push(LoginPage);
    }
    
  }


  getAllMeals() {
         
  }



}
