import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../../errorHandlers/http-error-handler.service';
import { environment } from '@env/environment';

import {
  AbstractSignInHttpPayload,
  AbstractSignInHttpResponse,
  AbstractSignOutHttpResponse
} from '@app/core/models';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  errorHandler: any;

  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService) {
      this.errorHandler = this.httpErrorHandler.createHandleError('USER_SERVICES');
  }

  userSignIn(siginData: AbstractSignInHttpPayload) {
    return this.http.post<AbstractSignInHttpResponse>(`${environment.apiURL}${environment.deepLink.signIn}`, siginData).pipe(
      catchError(this.errorHandler('signInError'))
    )
  }
  
  userSignOut(userID) {
    return this.http.get<AbstractSignOutHttpResponse>(`${environment.apiURL}${environment.deepLink.signOut}`).pipe(
      catchError(this.errorHandler('signOutError'))
    )
  }

}
