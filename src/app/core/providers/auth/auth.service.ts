import { Injectable } from '@angular/core';
import { StorageService, StorageKeys } from '@app/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setAuthToken(sessionToken: string) {
    StorageService.instance.setItem(StorageKeys.auth, sessionToken);
  }

  getAuthToken(): string {
    return StorageService.instance.getItem(StorageKeys.auth);
  }
}
