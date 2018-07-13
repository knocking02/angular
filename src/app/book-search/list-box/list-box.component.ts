import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';

interface IBook {
    bauthor: string;
    bdate: string;
    btranslator: string;
    bpublisher: string;
    btitle: string;
    bprice: number;
    bisbn: string;
    bimgurl: string;
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    this.http.get<IBook[]>('assets/data/book.json')
      .subscribe(res => {
          this.books = res;
          this.dataSource = new MatTableDataSource<IBook>(this.books);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource);
      });
  }

  ngOnInit() {
  }

}
