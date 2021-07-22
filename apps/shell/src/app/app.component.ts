import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'module-federation-ionic-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  constructor(private ref: ChangeDetectorRef) {}



  ngOnDestroy() {
    return onAuthUIStateChange;
  }
  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })  }
}
