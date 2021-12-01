import { Injectable } from '@angular/core';
import { task } from './taskInfo';

@Injectable({
    providedIn: 'root'
})
export class DemoService {

    constructor() { }
    getTask() {
        return task;
    }
}
