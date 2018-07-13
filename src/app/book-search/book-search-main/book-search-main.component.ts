import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  changeValue(category: string): void {
      //this.displayCategoryName = _.where(this.bookCaterory, category)[0];
      for (let element of this.bookCaterory) {
          if(element.value == category) {
              this.displayCategoryName = element.viewValue;
          }
      }
  }

  changeTitleBar(searchInfo): void {
       this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category} )`;
      //this.searchTitle = searchInfo.keyword + '(' + searchInfo.category + ')';
  }
}
