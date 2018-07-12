import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

    keyword = '';

    constructor() { }

  ngOnInit() {
  }

  setKeyword(keyword: string): void {
      this.keyword = keyword;
  }

  inputChange(event): void {
      console.log('changed', this.keyword, event);
  }
}
