import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookSearchMainComponent } from '../book-search/book-search-main/book-search-main.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { ListBoxComponent } from './list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'

import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';  // COMPOSITION_BUFFER_MODE : 양방향 바인딩 일경우, 한글 버그 해결(화면에 글자가 완성되야 출력되는 문제);


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
      {
          provide: COMPOSITION_BUFFER_MODE,
          useValue: false
      }
  ],
  declarations: [BookSearchMainComponent, SearchBoxComponent, DetailBoxComponent, ListBoxComponent]
})
export class BookSearchModule { }
