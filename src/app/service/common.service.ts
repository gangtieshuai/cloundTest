import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicateService } from './communicate.service';
import Parse from 'parse';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CommonService {

    customBreadcrumb: string;
    isHome: boolean;
    isLoading = false;
    constructor(
        private route: ActivatedRoute,
        private communicateService: CommunicateService
    ) { }

    setcustomBreadcrumb(url) {
        this.customBreadcrumb = url ? this.getRouter(url) : '';
    }
    getRouter(url) {
        let title;
        this.isHome = true;
        console.log(url);
        console.log(this.route.snapshot.queryParams);

        switch (url) {
            case '/':
                title = 'Games';
                break;
            case '/index':
                title = 'Games';
                break;
            case '/index/games':
                title = 'Games';
                break;
            case '/index/functions':
                title = 'Functions';
                break;
            case '/index/bandCard':
                title = 'Band Card';
                break;
            case '/index/profile':
                title = 'Profile';
                break;
            default:
                this.isHome = false;
                title = ''
                console.log();

                break;
        }
        return title;

    }



    sendScroll() {
        this.communicateService.eventbus.emit({ msg: this.customBreadcrumb });
    }
    httpClient(event: transPostOptions): Observable<any> {

        return new Observable((Observable) => {
            this.isLoading = true;
            setTimeout(() => {
                Parse.initialize("Y7LfslaNFxyOwxiLC4NTYUgaPYFDhMD5res9yFAX", "JjK1Kkfmzekw64W5cOXp7ZP6bdpwaQnXA7gtL9wb");
                Parse.serverURL = "https://parseapi.back4app.com/";
                const query = new Parse.Query(event.key);
                const size = event.size ? event.size : 5;
                const page = event.page ? event.page : 0;
                const skin = (page * size) - size;
                query.skip(skin);
                query.limit(size);
                query.find()
                    .then(results => {
                        console.log(results);
                        this.isLoading = false;
                        results = results.map((x) => {
                            return x.attributes;
                        });
                        Observable.next(results);
                        Observable.complete();
                    })
                    .catch(error => {
                        this.isLoading = false;
                        Observable.error(error)
                    });
            }, 800)
        })
    }
}
export interface transPostOptions {
    key: string;
    page: number;
    size: number;
}