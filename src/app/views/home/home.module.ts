import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home-routing.module';

import {
    TodoListComponent,
} from "./components";

import {
    DashboardComponent,
} from './container';

const HomeModuleComponents = [
    DashboardComponent,
    TodoListComponent,
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes),
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SharedModule,
    ],
    declarations: [HomeComponent, ...HomeModuleComponents]
})
export class HomeModule { }
