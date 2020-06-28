import { Injectable } from '@angular/core';

import {
  UserService
} from './http';

import {
  AbstractSignInHttpPayload,
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private userServices: UserService,
  ) { }

  /**
   * @description
   * method used to call user sign in
   */
  userSignIn(siginData: AbstractSignInHttpPayload) {
    return this.userServices.userSignIn(siginData);
  }

  /**
   * @description
   * method used to call user sign out
   */
  userSignOut(userId: string) {
    return this.userServices.userSignOut(userId);
  }

}
