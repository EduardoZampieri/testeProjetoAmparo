import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  message = 'Deslogado';

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  logOut() {
    try{
      this.authService.logout();
      this.router.navigate(['login']);
    }catch(error){
      console.error(error);
    }
  }
}
