import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate {

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

    if (!authToken) {
      // console.log('No Auth Token');
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const authToken = this.authService.getAuthToken();

    if (!authToken) {
      // console.log('No Auth Token');
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}

