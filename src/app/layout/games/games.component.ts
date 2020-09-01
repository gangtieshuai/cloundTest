import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router,Params, ActivatedRoute } from '@angular/router';
import { CommunicateService } from 'src/app/service/communicate.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit, OnDestroy {
    objSub: any;
    constructor(private router: Router,
        private route: ActivatedRoute,
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
        console.log(　this.route.snapshot.data.title);
        
    }
    ngOnDestroy() {
        this.objSub.unsubscribe();
    }

    clickEventHandler(event) {
        console.log(event);
        sessionStorage.setItem('s',event)
        this.router.navigate(['/index/detail/' + event.index],{
            queryParams: event
        });
    }
    getData() {
        console.log(this.page);

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
                    index: 0,
                    img: i.image,
                    price: i.price.toFixed(2)
                })
            });
        })
    }
}
