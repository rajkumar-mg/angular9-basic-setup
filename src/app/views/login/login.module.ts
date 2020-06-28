import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';

import { LoginRoutes } from './login-routing.module';
import { LoginComponent } from './login.component';

import {
  SigninComponent, 
  NotFoundComponent
} from './components';

const LoginModuleComponents = [
  SigninComponent,
  NotFoundComponent
]

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    ...LoginModuleComponents
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LoginModule { }
