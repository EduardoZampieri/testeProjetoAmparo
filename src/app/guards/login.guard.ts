import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canActivate(): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.router.navigateByUrl('/tabs/tab1');
        }
        resolve(user ? true: false);
      });
    });
  }
}
