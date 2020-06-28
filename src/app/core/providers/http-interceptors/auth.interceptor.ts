import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseInterceptor } from './base.interceptor';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor extends BaseInterceptor implements HttpInterceptor {

  loginPattern = /^api\/(login)|(register)/i;
  apiPattern = /^api/i;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    super();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let changedReq = req;

    const authToken = this.auth.getAuthToken();

    if (this.isNotExcludedURL(req.url) && authToken) {

      changedReq = req.clone({
        headers: req.headers.append('x-access-token', this.auth.getAuthToken()),
      });

      return next.handle(changedReq).pipe(  // SESSION VALIDATOR FOR ALL API EXCEPT LOGIN AND SIGN UP
        tap((res: any) => {
          if (!!res.body && !!res.body.session && !res.body.session.token) {
            console.log('SESSSION EXPRIRED MESSAGE FROM INTERCEPTOR: ', res.body.session);
            // @todo need to show the session expired pop up
            this.auth.setAuthToken('');
            this.router.navigateByUrl('/');
          }
        }),
      );
    }

    return next.handle(req);
  }

  private isLoginURL(url: string) {
    return this.loginPattern.test(url);
  }

  private isBOURL(url: string) {
    return this.apiPattern.test(url);
  }

  private isNotExcludedURL(url: string): boolean {

    if (url.includes('login')
      || !url.includes('www.myserver.com')

    ) {
      return false;
    }
    return true;
  }
}
