import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

    book = {
        btitle: 'Angular 5 일만에 완성',
        bauthor: '에릭 프리먼외 3명',
        bprice: 19000,
        bisbn: '89-7914-340-0',
        bimgurl: 'http://image.hanbit.co.kr/cover/_m_1340m.gif',
        bdate: '2018년 8월'
    };



    constructor() { }

    ngOnInit() {
    }

}
