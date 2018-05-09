import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AppConfig} from '../../config/app.config';
import { User } from '../../model/user';
import { Token } from '../../model/token';

import { UserService } from '../../service/user.service';
import { ErrorService } from '../../service/error.service';
import { LoggerService } from '../../core/logger.service';
declare var $: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  showError = false;
  errorMessage: string;

  user: User;
  token: Token;
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private errorService: ErrorService,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.fb.group({
      userName: ['', Validators.required], // <--- the FormControl called "name"
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    if (this.userService.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.user = this.signInForm.value;
    this.userService.login(this.user).subscribe((token) => {
      // LoggerService.log(token);
      this.onSucces(token);
    }, (error: Response) => {
      this.showError = true;
      this.errorMessage = error['error']['message'];
      LoggerService.error('Login Error', error);
       this.logError(error);
    });
  }

  onSucces(data) {
    // this.authService.setLoggedInUserName(data.userName);
    // localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('secureToken', data.tokenKey + ':' + data.token);
    this.router.navigate(['/', AppConfig.routes.home]);
  }

  toggle() {
    $('.container').stop().addClass('active');
  }

  close() {
    $('.container').stop().removeClass('active');
  }

      /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error);
  };
}
