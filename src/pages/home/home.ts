import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { MealInformationPage } from '../meal-information/meal-information';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuProvider: MenuProvider, private modalCtrl: ModalController) {

  }

  openMealInfoModal( meal ) { 
    let modal = this.modalCtrl.create(MealInformationPage, { data: meal });

    modal.onDidDismiss(data => {
      console.log(data);
    });

    modal.present();
  }



}
