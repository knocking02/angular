import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';

import { HttpSupportService } from '../http-support.service';

import { JSON_DATA_CONFIG, JsonConfig } from './json-config'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [
    //HttpSupportService    // Angular Framework에 어떤 class 가 Injgection 되는지 알려줘야 한다.
    // 위의 코드는 사실 밑의 코드의 축약형이다.
    // {
    //   provide: HttpSupportService,    // 데이터 타입
    //   useClass: HttpSupportService    // 실제 객체를 생성하기 위해 필요한 class명
    // },
    {
      provide: JsonConfig,
      useValue: JSON_DATA_CONFIG
    }
  ]
})
export class SearchBoxComponent implements OnInit {

    //@Input() bookCaterory:string;
    // ==> @Input('bookCaterory') mySelected:string;

    _bookCategory: string;

    @Input('selectedValue') selectedValue:string;

    @Input()
    set bookCaterory(value: string) {
        if(value != null) {
            this._bookCategory = 'category: ' + value;
        }else {
            this._bookCategory = '';
        }
    }

    @Output() searchEvent = new EventEmitter();

    keyword = null;

    constructor(
      private httpSupportService: HttpSupportService,
      @Optional() private jsonConfig: JsonConfig  // 의존객체의 주입이 필수가 아니라는것의 의미
    ) { }

    ngOnInit() {
    }

    setKeyword(keyword: string): void {
        this.keyword = keyword;
        this.searchEvent.emit({
            keyword: `${this.keyword}`,
            category: `${this._bookCategory.replace('category: ','')}`
        })
        // this.searchEvent.emit({
        //     keyword: this.keyword,
        //     category: this._bookCategory.replace('category: ','')
        // })
        console.log('selectedValue: ' + this.selectedValue);
        this.httpSupportService.getJsonData(
          this.jsonConfig.url,
          this.jsonConfig.name,
          this.selectedValue,
          this.keyword);
    }

    inputChange(event): void {
      //  console.log('changed', this.keyword, event);
    }
}
