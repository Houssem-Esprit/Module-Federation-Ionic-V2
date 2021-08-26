import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Cache } from 'aws-amplify';
import {Auth} from '@aws-amplify/auth';
@Component({
  selector: 'module-federation-ionic-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  //user: CognitoUserInterface | undefined;
  //authState: AuthState;
  user: any;
  isUserLoggedIn = false;

  constructor() {}



  ngOnDestroy() {
    //return onAuthUIStateChange;
  }
  async ngOnInit()  {

    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      this.isUserLoggedIn = true;
      //this.userName = user?.attributes?.name;
    })
    .catch(err => console.log(err))

   /* onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })  */
  
  
     //const  federatedInfo = await Cache.getItem('federatedInfo');
     //const { token } = federatedInfo;
     //console.log('user token : ',token);
  }

  login() {
    Auth.federatedSignIn();
  }

  logout() {
    this.isUserLoggedIn = false;
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }


}
