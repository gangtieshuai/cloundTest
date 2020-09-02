import { Injectable, EventEmitter } from '@angular/core';
/* gangtieshuai
   郭德纲
*  广播
*/
@Injectable()
export class CommunicateService {
    eventbus: EventEmitter<any> = new EventEmitter<any>();
}
