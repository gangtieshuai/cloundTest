import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    customBreadcrumb: string;
    isHome: boolean;
    constructor(
        private route: ActivatedRoute,
    ) { }
    getHeroes(id): any {
       console.log(id);
       return 1;
    }
    setcustomBreadcrumb(url) {
        this.customBreadcrumb = url ? this.getRouter(url) : '';
    }
    getRouter(url) {
        let title;
        this.isHome = true;
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
                title = 'xxx';
                break;
        }
        return title;

    }
}
