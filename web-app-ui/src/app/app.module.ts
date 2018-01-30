import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from './test.service';
import { AppRoutingModule } from './/app-routing.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { Error404Component } from './core/error404/error404.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { UserService } from './service/user.service';
import { LoggerService } from './core/logger.service';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Error404Component,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    ReactiveFormsModule
  ],
  providers: [TestService, UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
