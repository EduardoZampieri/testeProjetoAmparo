import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canActivate(): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (!user) {
          this.router.navigate(['login']);
        }
        resolve(user ? true: false);
      });
    });
  }

}
