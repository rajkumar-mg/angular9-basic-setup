import {HttpRequest} from '@angular/common/http';

export class BaseInterceptor {

  loginPattern = /^api\/(admin_auth\/sign_in)|(register)/i;

  isBOAPI(req: HttpRequest<any>) {
    return /^api\//.test(req.url);
  }

  excludeAuthenticateHeadersForThisURL(url: string) {
    return !this.loginPattern.test(url);
  }

}
