import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { HttpSupportService  } from '../http-support.service'
import { SelectionModel } from '@angular/cdk/collections';
import { IBook } from '../model/ibook';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css'],
  // providers: [
  //   {
  //     provide: HttpSupportService,
  //     useClass: HttpSupportService
  //   }
  // ]
})
export class ListBoxComponent implements OnInit {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];

  // event 처리
  selection = new SelectionModel<IBook>(false, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpSupportService: HttpSupportService) {
    this.httpSupportService.updateBooks.subscribe(data => {
      if(data !== null) {
        this.books = data;
        this.dataSource = new MatTableDataSource<IBook>(this.books);
        this.dataSource.paginator = this.paginator;
      }

    })
  }

  ngOnInit() {
  }

  rowSelect(row): void {
      this.selection.select(row);
      this.httpSupportService.updateSelectedBook.next(this.selection.selected[0]);
  }


  getData(): void {
    this.books = this.httpSupportService.getBooks();
    console.log(this.books);
    this.dataSource = new MatTableDataSource<IBook>(this.books);
    this.dataSource.paginator = this.paginator;
  }

}
