import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd} from '@angular/router';
import { CommonService } from './service/common.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'cloudTest-Demo';
    constructor(
        private router: Router,
        private common: CommonService,
    ) {
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof ResolveEnd) {
                this.common.setcustomBreadcrumb(event.url);
            }
        });
    }
}
