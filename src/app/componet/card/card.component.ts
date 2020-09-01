import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  dataList = [];
  @Output()
  clickEventHandler: EventEmitter<{ event: any }> = new EventEmitter(); 
  ngOnInit() {
  }
  divClick(item) {
    this.clickEventHandler.emit(item);
  }
}
