import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import {AppConfig} from '../../config/app.config';
import { User } from '../../model/user';

import { UserService } from '../../service/user.service'
import { LoggerService } from '../../core/logger.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  showError: boolean = false;
  errorMessage: string;

  user: User;
  constructor(private userService: UserService,
    private fb: FormBuilder,
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

  }

  onSubmit() {
    this.user = this.signInForm.value;
    this.userService.login(this.user).subscribe((user) => {
      LoggerService.log(user);
      this.onSucces(user);
    }, (error: Response) => {
      this.showError = true;
      this.errorMessage = error['error']['message'];
      LoggerService.error('Login Error', error);
    });
  }

  onSucces(data) {
    //this.authService.setLoggedInUserName(data.userName);
    //localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('userName', data.userName);
    this.router.navigate(['/', AppConfig.routes.home]);
  }
}
