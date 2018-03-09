import { Injectable, EventEmitter} from '@angular/core';

import {Error} from '../model/error';

@Injectable()
export class ErrorService {

  /**
     * @type {EventEmitter<Error>}
     */
    errorOccurred = new EventEmitter<Error>();

    /**
     * @description emit errorOccurred
     * @param error
     */
    handleError(error: any) {
        // TODO handle error and emit errorOccurred
        console.log(error['headers']);
        if (error['error']['message'] === undefined) {
        this.errorOccurred.emit(error);
        } else {
        this.errorOccurred.emit(error['error']);
        }
    }

}
