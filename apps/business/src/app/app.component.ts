import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'module-federation-ionic-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    //console.log("current route using (router.url) : ",this.router.url);
    //console.log("current route using (window.location.href) : ",window.location.href)
    //console.log('is match : ',window.location.href.includes(environment.BUSINESS_APP_ENDPOINT));
  }

}
