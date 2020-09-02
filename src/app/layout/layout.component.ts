import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
/* gangtieshuai
   郭德纲
*  layout布局
*/
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
    constructor(
        public service: CommonService,
        private cdref: ChangeDetectorRef,
    ) {
    }
    headTitle: string;
    ngOnInit(): void {

    }
    /// 滚动条
    tmsScroll(event) {
        const scrollHeight = event.target.scrollHeight;
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        if (scrollHeight - clientHeight === scrollTop) {
            this.service.sendScroll();
        }
    }
    back(){
        window.history.go(-1);
    }
    // tslint:disable-next-line: use-lifecycle-interface 触发检测机制
    ngAfterContentChecked() {
        this.cdref.detectChanges();
         }
}
