import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

    //@Input() bookCaterory:string;
    // ==> @Input('bookCaterory') mySelected:string;

    _bookCategory: string;
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

    constructor() { }

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
  }

  inputChange(event): void {
      console.log('changed', this.keyword, event);
  }
}
