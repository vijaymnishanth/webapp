import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../../service/error.service';
import { Error } from '../../model/error';
declare var $: any;
@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    /**
     * @type Error
     */
    error: Error;

    /**
     * @type {string}
     */
    display = 'none';

    /**
     * Constructor for ErrorComponent class
     * @param errorService
     */
    constructor(private errorService: ErrorService,
        private userService: UserService) { }

    /**
     * @description set display none
     */
    onErrorHandled() {
        this.display = 'none';
    }

    /**
     * @override handle error id any
     */
    ngOnInit() {
        this.errorService.errorOccurred
            .subscribe(
                (error: Error) => {
                    this.error = error;
                    $('#message').hide();
                    if (this.error.message === 'Session Expired') {
                        $('#message').show();
                        this.logout();
                        this.userService.userLoggedIn.emit(false);
                    }
                    this.display = 'block';
                }
            );
    }

    loggedOut(): boolean {
        this.display = 'none';
        return true;
    }

    logout() {
        localStorage.removeItem('secureToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
    }
}
