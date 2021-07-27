import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {environment} from '@env-business/environment';

@Component({
  selector: 'module-federation-ionic-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { ""
  }

  onSubmit(){
    if(this.router.url.includes('business')){
     this.router.navigate(['business/payment']);
    }else {
     this.router.navigate(['/payment']);
    }
  }
}
