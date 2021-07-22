import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/payment']);
  }
}
