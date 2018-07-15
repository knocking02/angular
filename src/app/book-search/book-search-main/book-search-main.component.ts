import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';

import * as $ from 'jquery';
import * as _ from 'underscore/underscore';

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {

    searchTitle = null;
    selectedValue = null;
    displayCategoryName = null;
    bookCaterory = [
        {value: 'all', viewValue: '국내외도서'},
        {value: 'coutry', viewValue: '국내도서'},
        {value: 'foreign', viewValue: '국외도서'}
    ]

  constructor() {
      console.log('constructor')
  }

  ngOnInit() {
    console.log('ng.OnInit')
  }

  changeValue(category: string): void {

      this.displayCategoryName = _.findWhere(this.bookCaterory, {value: category}).viewValue;
      //this.displayCategoryName = _.wh
      // for (let element of this.bookCaterory) {
      //     if(element.value == category) {
      //         this.displayCategoryName = element.viewValue;
      //     }
      // }
  }

  changeTitleBar(searchInfo): void {
       this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category} )`;
      //this.searchTitle = searchInfo.keyword + '(' + searchInfo.category + ')';
  }

  /* 자식 View 에 접근하는 법 */
  @ViewChild(SearchBoxComponent) searchComp: SearchBoxComponent;
  @ViewChildren(SearchBoxComponent) searchCompArr: QueryList<SearchBoxComponent>;

  clearCondition(): void {
      this.selectedValue = null;
      this.searchTitle = null;

      // @ViewChild를 사용할 경우
      //this.searchComp._bookCategory = null;
      //this.searchComp.keyword = null;

      // @ViewChildren을 사용할 경우
      // console.log(this.searchCompArr.toArray().length)
      // this.searchCompArr.toArray()[0]._bookCategory = null;
      // this.searchCompArr.toArray()[0].keyword = null;

      for (let schComp of this.searchCompArr.toArray()) {
          schComp._bookCategory = null;
          schComp.keyword = null;
      }

  }

  @ViewChild('resultStatus') resulltToolbar: ElementRef;
  changeDOM(): void {
    this.resulltToolbar.nativeElement.onClick = function() {
      alert('DOM을 직접 제어할 수 있어요!!');
    };
    this.resulltToolbar.nativeElement.innerHTML = '클릭해보세요.'
  }
}
