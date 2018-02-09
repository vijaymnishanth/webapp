import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppConfig} from './config/app.config';
import{TestComponent} from './test/test.component';
import{SignInComponent} from './login/sign-in/sign-in.component'
import{HomeComponent} from './components/home/home.component'

import{LoggedInAuthGuard} from './guard/logged-in-auth.guard'

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path:AppConfig.routes.home,component:HomeComponent,canActivate: [LoggedInAuthGuard]
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
