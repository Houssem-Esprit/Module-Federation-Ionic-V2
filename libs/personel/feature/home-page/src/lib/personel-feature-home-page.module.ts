import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePageComponent
  ],
})
export class PersonelFeatureHomePageModule {}
