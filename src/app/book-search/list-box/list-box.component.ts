import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { HttpSupportService  } from '../http-support.service'

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

  constructor(private httpSupportService: HttpSupportService) {
    this.httpSupportService.updateBooks.subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit() {
  }

  getData(): void {
    this.books = this.httpSupportService.getBooks();
    console.log(this.books);
    this.dataSource = new MatTableDataSource<IBook>(this.books);
    this.dataSource.paginator = this.paginator;
  }

}
