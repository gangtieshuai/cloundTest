import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class CommunicateService {
    eventbus: EventEmitter<any> = new EventEmitter<any>();
}
