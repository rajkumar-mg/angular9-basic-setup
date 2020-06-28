import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }


  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable onSelectChange
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {

      if (!!error.error && !!error.error.session && !error.error.session.validity && !!this.auth.getAuthToken()) {
        console.log('SESSSION EXPRIRED MESSAGE FROM HTTP_ERROR_HANDLER: ', error.error.status.message);
        this.auth.setAuthToken('');
        this.router.navigateByUrl('/');
      }

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;
      return of<any>(error);
    };
  }
}
