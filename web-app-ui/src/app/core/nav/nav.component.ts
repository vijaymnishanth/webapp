import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.userService.userLoggedIn.subscribe(
      (userLoggedIn: boolean) => {
        this.isLoggedIn = userLoggedIn;
      }
    );
    this.isLoggedIn = true;
    // this.userService.isLoggedIn();
  }

  addUYP(): boolean {
    // this.router.navigate(['/', 'uypForm']);
    return true;
  }

}
