import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Router Module import
import { Routes, RouterModule } from '@angular/router';

// Routing 처리를 할 각각의 Component import
import { HomeComponent } from '../pages/home/home.component';
import { BookSearchMainComponent } from '../book-search/book-search-main/book-search-main.component';
import { MovieSearchMainComponent } from '../movie-search/movie-search-main/movie-search-main.component';

// Router 생성(path 표시할 때 Root path에 대한 '/' 제외)
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'book', component: BookSearchMainComponent},
  {path: 'movie', component: MovieSearchMainComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
