import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AuthGuardGuard} from '@module-federation-ionic/shared/util/guards';
import {SharedUtilGuardsModule} from '@module-federation-ionic/shared/util/guards';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AmplifyUIAngularModule, SharedUtilGuardsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
