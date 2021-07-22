import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePageComponent
  ],
})
export class BusinessFeatureHomePageModule {}
