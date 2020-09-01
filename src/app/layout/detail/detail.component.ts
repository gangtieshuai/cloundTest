import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private service: CommonService,
    ) { }
    heroes$: Observable<any[]>;
    id: any;
    selectedId: number;
    ngOnInit(): void {

        console.log(this.route.params['value']['id']);

    }

}
