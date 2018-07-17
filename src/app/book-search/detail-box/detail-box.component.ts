import { Component, OnInit } from '@angular/core';
import { HttpSupportService } from '../http-support.service';
import { IBook } from '../model/ibook';


@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

    book: IBook;



    constructor(private httpSupportService: HttpSupportService) {
      this.httpSupportService.updateSelectedBook.subscribe(data => {
        this.book = data;
      })
    }

    ngOnInit() {
    }

}
