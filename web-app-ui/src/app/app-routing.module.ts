import { UydViewComponent } from './components/views/uyd-view/uyd-view.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RdoViewComponent } from './components/views/rdo-view/rdo-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppConfig} from './config/app.config';
import {TestComponent} from './test/test.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';
import {HomeComponent} from './components/home/home.component';
import {UndyedYarnPurchaseComponent} from './components/forms/undyed-yarn-purchase/undyed-yarn-purchase.component';
import {DyeingOrderComponent} from './components/forms/dyeing-order/dyeing-order.component';
import {UypViewComponent} from './components/views/uyp-view/uyp-view.component';
import {LoggedInAuthGuard} from './guard/logged-in-auth.guard';
import { DyeingOrderViewComponent } from './components/views/dyeing-order-view/dyeing-order-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'uypForm', component: UndyedYarnPurchaseComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'dyeingOrderForm', component: DyeingOrderComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'uypView', component: UypViewComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'dyeingOrderView', component: DyeingOrderViewComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'receivedDyeingOrderView', component: RdoViewComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [LoggedInAuthGuard]},
  {path: AppConfig.routes.home, component: HomeComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'uydView', component: UydViewComponent, canActivate: [LoggedInAuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
