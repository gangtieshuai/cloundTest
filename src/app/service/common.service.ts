import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicateService } from './communicate.service';
import Parse from 'parse';
import { Observable } from 'rxjs';
/* gangtieshuai
   郭德纲
*  通用方法
*/

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    customBreadcrumb: string;
    isHome: boolean; // 是否主页
    isLoading = false; // 请求loading
    constructor (
        private route: ActivatedRoute,
        private communicateService: CommunicateService
    ) { }
    // 头部标题
    setcustomBreadcrumb(url) {
        this.customBreadcrumb = url ? this.getRouter(url) : '';
    }
    // 路由解析
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
                const str = url.split('/');
                this.isHome = false;
                if (str[2] === 'detail' && str[3]) {
                    const obj = this.getDetailValue(str[3]);
                    title = obj.text;
                } else {
                    title = 'Games';
                }
                break;
        }
        return title;

    }
    // 会话存储游戏信息
    setDetailValue(event) {
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise(resolve => {
            sessionStorage.setItem('detail' + event.index, JSON.stringify(event));
            resolve();
        });
    }
    // 获取存储游戏信息
    getDetailValue(index) {
        return JSON.parse(sessionStorage.getItem('detail' + index));
    }
    // 向组件通知
    sendScroll() {
        this.communicateService.eventbus.emit({ msg: this.customBreadcrumb });
    }
    // 请求封装
    httpClient(event: transPostOptions): Observable<any> {

        // tslint:disable-next-line: no-shadowed-variable
        return new Observable((Observable) => {
            this.isLoading = true;
            setTimeout(() => { // 体验loading,延迟300毫秒发送
                Parse.initialize('Y7LfslaNFxyOwxiLC4NTYUgaPYFDhMD5res9yFAX', 'JjK1Kkfmzekw64W5cOXp7ZP6bdpwaQnXA7gtL9wb');
                Parse.serverURL = 'https://parseapi.back4app.com/';
                const query = new Parse.Query(event.key);
                const size = event.size ? event.size : 5;
                const page = event.page ? event.page : 0;
                const skin = (page * size) - size;
                if (event.equal) {
                    query.equalTo(event.equal.key, event.equal.value);
                }
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
                        console.log(error);
                        alert('请求异常' + error);
                        this.isLoading = false;
                        Observable.error(error);
                    });
            }, 300);
        });
    }
}
// tslint:disable-next-line: class-name
export interface transPostOptions {
    key: string; // 请求key
    page: number; // 页数
    size: number; // 条数
    equal?: any;  // 查询条件
}
