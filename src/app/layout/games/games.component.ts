import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit {

    constructor(private router: Router) { }
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
    clickEventHandler(event) {
        console.log(event);
        this.router.navigate(['/index/detail/' + event.index]);
    }
}
