import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService implements CanLoad, CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {

    const authToken = this.authService.getAuthToken();

    if (!!authToken) {
      this.router.navigateByUrl('/home/dashboard');
      return false;
    }

    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const authToken = this.authService.getAuthToken();

    if (!!authToken) {
      this.router.navigateByUrl('/home/dashboard');
      return false;
    }

    return true;
  }

}

