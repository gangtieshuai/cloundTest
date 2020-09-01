import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd, ActivatedRoute, NavigationStart } from '@angular/router';
import { CommonService } from './service/common.service';
import { CommunicateService } from './service/communicate.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'test';
    constructor(
        private router: Router,
        private common: CommonService,
        private route: ActivatedRoute,
    ) {
    }
    ngOnInit() {
     
        this.router.events.subscribe(event => {
            if (event instanceof ResolveEnd) {
                this.common.setcustomBreadcrumb(event.url);
            }
        })
    }
}
