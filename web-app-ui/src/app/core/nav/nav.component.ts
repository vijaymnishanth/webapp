import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn:boolean;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

}
