import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './core';
import { NotFoundComponent } from './views/login/components';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login', preload: true },
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home', preload: false },
    canLoad: [AuthGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
