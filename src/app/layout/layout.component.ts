import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  constructor(
    private router: Router,
    public service:CommonService
  ) {
  }
  headTitle:string;
  ngOnInit(): void {
 
  }
  tabBarTabOnPress(pressParam: any) {
    const link = pressParam.index === 0 ? '/index/list' : '/index/home';
    this.router.navigate([link]);
  }

}
