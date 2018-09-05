import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealInformationPage } from './meal-information';

@NgModule({
  declarations: [
    MealInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(MealInformationPage),
  ],
})
export class MealInformationPageModule {}
