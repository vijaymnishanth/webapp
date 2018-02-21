import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppConfig} from './config/app.config';
import {TestComponent} from './test/test.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';
import {HomeComponent} from './components/home/home.component';
import {UndyedYarnPurchaseComponent} from './components/forms/undyed-yarn-purchase/undyed-yarn-purchase.component';
import {UypViewComponent} from './components/views/uyp-view/uyp-view.component';
import {LoggedInAuthGuard} from './guard/logged-in-auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'uypForm', component: UndyedYarnPurchaseComponent},
  {path: 'uypView', component: UypViewComponent, canActivate: [LoggedInAuthGuard]},
  {path: AppConfig.routes.home, component: HomeComponent, canActivate: [LoggedInAuthGuard]
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
