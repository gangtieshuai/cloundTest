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
    constructor(
        private route: ActivatedRoute,
        public common: CommonService,
        public communicateService: CommunicateService,
    ) {
        this.objSub = this.communicateService.eventbus.subscribe((event) => {
            if (this.isHttp) {
                this.page++;
                this.getData();
            }
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
    dataList = [];
    page = 1;
    isHttp = true;
    dataobj: Object;
    ngOnInit(): void {
        this.getData();
        console.log(this.route.params['value']['id']);
        this.dataobj = this.route.snapshot.queryParams
    }
    ngOnDestroy() {
        this.objSub.unsubscribe();
    }
    getData() {
        this.common.httpClient(
            {
                key: 'Comments',
                page: 1,
                size: 1
            }
        ).subscribe(res => {
            console.log(res);
            if (res.length === 0) {
                this.isHttp = false;
            }
            res.forEach(i => {
                this.dataList.push({
                    text: i.name,
                    index: 0,
                    img: i.image,
                    price: i.price.toFixed(2)
                })
            });
        })
    }

}
