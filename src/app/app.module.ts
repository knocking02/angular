import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import{ BookSearchModule  } from './book-search/book-search.module';
import{ MovieSearchModule  } from './movie-search/movie-search.module';

import{ AppRoutingModule } from './app-routing/app-routing.module';
import { TextColorDirective } from './directive/text-color.directive';
import { BookPricePipe } from './pipe/book-price.pipe';

@NgModule({

  declarations: [ // Component, Directive, Pipe에 대한 리스트가 선언된다.
    HomeComponent,
    TextColorDirective,
    BookPricePipe,
    AppComponent
  ],
  imports: [    // 의존관계에 있는 Angular Libraly Module과 하위 Module, Routing Module, Ionic과 같은 Third Party Module이 포함된다.
    BrowserModule, // 웹 브라우저를 위한 모듈, 브라우저에서 작동하는 Web Application인 경우 Root Module은 반드시 BrowserModule을 import 해야 한다.
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    BookSearchModule,
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 오직 Root Module만, 가지고 있는 property. 즉, bootstrap은 browser가 최초로 index.html을 읽어들여 application을 시작할때 사용할 Component를 명시한다.

})
export class AppModule { }
