import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import {
    DashboardComponent,
} from './container';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },
];
