import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { CommunicateService } from '../service/communicate.service';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
    constructor (
        private router: Router,
        public service: CommonService,
        private cdref: ChangeDetectorRef,


    ) {
    }
    headTitle: string;
    ngOnInit(): void {

    }
    tabBarTabOnPress(pressParam: any) {
        this.router.navigate(['link']);
    }

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
    ngAfterContentChecked() {
        this.cdref.detectChanges();
         }
}
