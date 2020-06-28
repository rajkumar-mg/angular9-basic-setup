
import { Routes } from '@angular/router';

import { SigninComponent } from './components';
import { LoginComponent } from './login.component';
import { NoAuthGuardService } from '@app/core';

export const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [NoAuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" }
      },
    ]
  }
];
