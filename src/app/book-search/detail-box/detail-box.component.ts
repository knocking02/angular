import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

    book = {
        title: 'Angular 5 일만에 완성',
        author: '에릭 프리먼외 3명',
        price: 19000,
        isbn: '89-7914-340-0',
        imgurl: 'http://image.hanbit.co.kr/cover/_m_1340m.gif',
        date: '2018년 8월'
    };



    constructor() { }

    ngOnInit() {
    }

}
