import { LoggerService } from './../../core/logger.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.logout().subscribe((loggedout) => {
      this.logout();
    }, (error: Response) => {
        this.logout();
        LoggerService.error('Login Error', error);
        this.logError(error);
     });
  }

  logout() {
    localStorage.removeItem('secureToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }

    /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error);
  };
}
