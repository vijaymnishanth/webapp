import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from './test.service';
import { AppRoutingModule } from './/app-routing.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { UserService } from './service/user.service';
import { LoggerService } from './core/logger.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import {LoggedInAuthGuard} from './guard/logged-in-auth.guard';
import { UndyedYarnPurchaseComponent } from './components/forms/undyed-yarn-purchase/undyed-yarn-purchase.component';
import { ErrorComponent } from './core/error/error.component';
import { ErrorService } from './service/error.service';
import { FormService } from './service/form.service';
import { UypViewComponent } from './components/views/uyp-view/uyp-view.component';
import { ViewService } from './service/view.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SignInComponent,
    HomeComponent,
    NavComponent,
    UndyedYarnPurchaseComponent,
    ErrorComponent,
    UypViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TestService, UserService, LoggerService, LoggedInAuthGuard, ErrorService, FormService, ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
