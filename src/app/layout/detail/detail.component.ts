import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
import { CommunicateService } from 'src/app/service/communicate.service';
@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit, OnDestroy {
    objSub: any;
    constructor (
        private route: ActivatedRoute,
        public common: CommonService,
        public communicateService: CommunicateService,
    ) {
    this.objSub = this.communicateService.eventbus.subscribe((event) => {
        console.log(event);
   });
    }
    users = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];
    ngOnInit(): void {
        console.log(this.route.params['value']['id']);
    }
    ngOnDestroy() {
        this.objSub.unsubscribe();
    }

}
