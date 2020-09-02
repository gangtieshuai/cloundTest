import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { CommunicateService } from 'src/app/service/communicate.service';
/* gangtieshuai
   郭德纲
*  游戏详情
*/
@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit, OnDestroy {
    objSub: any;
    constructor(
        private route: ActivatedRoute,
        public common: CommonService,
        public communicateService: CommunicateService,
    ) {
        this.objSub = this.communicateService.eventbus.subscribe((event) => {
            console.log(event);
            if (this.isHttp) {
                this.page++;
                this.getData();
            }
        });
    }
    users = [];
    dataList = [];
    page = 1;
    isHttp = true;
    gameId: number;
    isnullData = true;
    // tslint:disable-next-line: ban-types
    dataobj: Object;
    ngOnInit(): void {
        this.gameId = this.route.params['value']['id'];
        this.dataobj = this.common.getDetailValue(this.gameId);
        this.getData();
    }
    ngOnDestroy() {
        this.objSub.unsubscribe();
    }
    getData() {
        this.common.httpClient(
            {
                key: 'Comments',
                page: this.page,
                size: 6,
                equal: { key: 'gameId', value: Number(this.gameId) }
            }
        ).subscribe(res => {
            console.log(res);
            if (res.length === 0) {
                this.isHttp = false;
                this.isnullData = this.page === 1 ? false : true;
            }
            res.forEach(i => {
                this.users.push(i);
            });
        });
    }

}
