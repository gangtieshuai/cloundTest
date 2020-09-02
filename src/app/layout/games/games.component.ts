import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicateService } from 'src/app/service/communicate.service';
import { CommonService } from 'src/app/service/common.service';
/* gangtieshuai
   郭德纲
*  游戏列表
*/

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit, OnDestroy {
    objSub: any;
    constructor(private router: Router,
                private communicateService: CommunicateService, private common: CommonService) {
        this.objSub = this.communicateService.eventbus.subscribe((event) => {
            if (this.isHttp) {
                this.page++;
                this.getData();
            }
        });
    }
    dataList = [];
    page = 1;
    isHttp = true;
    ngOnInit(): void {
        this.getData();
    }
    ngOnDestroy() {
        // 取消订阅，释放内存
        this.objSub.unsubscribe();
    }

    clickEventHandler(event) {
        this.common.setDetailValue(event).then(() => {
            this.router.navigate(['/index/detail/' + event.index]);
        });
    }
    getData() {
        this.common.httpClient(
            {
                key: 'Game',
                page: this.page,
                size: 4
            }
        ).subscribe(res => {
            if (res.length === 0) {
                this.isHttp = false;
            }
            res.forEach(i => {
                this.dataList.push({
                    text: i.name,
                    index: i.gameId,
                    img: i.image,
                    price: i.price.toFixed(2)
                });
            });
        });
    }
}
