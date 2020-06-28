import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BaseInterceptor } from './base.interceptor';

@Injectable()
export class ApiInterceptor extends BaseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const contentType = this.getContentType(req.url);
    if (contentType) {
      const changedReq = req.clone({
        headers: req.headers.set('Content-Type', contentType)
      });
      return next.handle(changedReq);
    }

    return next.handle(req);
  }

  private getContentType(url) {
    return 'application/json';
  }

}
