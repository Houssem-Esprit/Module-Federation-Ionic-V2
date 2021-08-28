import { Component, OnInit } from '@angular/core';
import {Auth} from '@aws-amplify/auth';

@Component({
  selector: 'module-federation-ionic-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isUserLoggedIn = false;
  constructor() { }

  ngOnInit(): void {

    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      this.isUserLoggedIn = true;
      //this.userName = user?.attributes?.name;
    })
    .catch(err => console.log(err))
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
