import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicateService } from 'src/app/service/communicate.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit, OnDestroy {
    objSub: any;
    constructor (private router: Router, private communicateService: CommunicateService) {
        this.objSub = this.communicateService.eventbus.subscribe((event) => {
             console.log(event);
        });

    }
    dataList = [
        {
            text: 'The Legend of Zeida',
            index: 0,
            img: '../../../assets/cola.jpg',
            price: '30.00'
        },
        {
            text: 'The Legend of Zeida',
            index: 1,
            img: '../../../assets/cola.jpg',
            price: '30.00'
        },
        {
            text: 'The Legend of Zeida',
            index: 2,
            img: '../../../assets/cola.jpg',
            price: '30.00'
        },
        {
            text: 'The Legend of Zeida',
            index: 3,
            img: '../../../assets/cola.jpg',
            price: '30.00'
        }
        ,
        {
            text: 'The Legend of Zeida',
            index: 0,
            img: '../../../assets/cola.jpg',
            price: '30.00'
        }
    ];
    ngOnInit(): void {
    }
    ngOnDestroy() {
        this.objSub.unsubscribe();
    }
    clickEventHandler(event) {
        console.log(event);
        this.router.navigate(['/index/detail/' + event.index]);
    }
}
