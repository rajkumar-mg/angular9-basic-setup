import {ApiInterceptor} from '@service/http-interceptors/api.interceptor';
import {AuthInterceptor} from '@service/http-interceptors/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

export const HTTP_INTERCEPTOR_PROVIDERS = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
];
