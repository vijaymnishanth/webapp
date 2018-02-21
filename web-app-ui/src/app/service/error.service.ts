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
        this.errorOccurred.emit(error);
    }

}
