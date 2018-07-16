import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";

interface IBook {   // 추후 다른 패키지에서 관리
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Injectable({       // 해당 class 가 다른 class에 주입(Injgection)될수 있다는 의미
  providedIn: 'root'
})
export class HttpSupportService {
  books: IBook[];
  updateBooks: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(this.books);

  constructor(private http: HttpClient) { }  // 주입은 생성자를 이용하게 되고 주입과정은 Angular Framework이 담당한다.

  getJsonData(url:string, name:string, category:string, keyword:string) {
    this.http.get<IBook[]>(`${url}${name}`)
      .subscribe(res =>{

        let tmp = null;
        // 도서종류와 검색어를 이용한 도서 데이터 filtering 시장
        if(category == 'all') {   // 국내외도서
          tmp = res.filter(function(item, idx, arr) {
          if(item.btitle.includes(keyword)) {
            return true;
          }else {
            return false;
          }
        })

        } else if(category == 'country') { // 국내도서
          tmp = res.filter(function(item,idx, arr){
            if(item.btitle.includes(keyword)){
              return true;
            }else {
              return false;
            }
          }).filter(function(item, idx, arr) {
            if(item.btranslator == '') {
              return true;
            }else {
              return false;
            }
          })

        } else if(category == 'foreign') {  // 해외도서
          tmp = res.filter(function(item,idx, arr){
            if(item.btitle.includes(keyword)){
              return true;
            }else {
              return false;
            }
          }).filter(function(item, idx, arr) {
            if(item.btranslator != '') {
              return true;
            }else {
              return false;
            }
          })

        }

        //this.books = tmp;
        this.updateBooks.next(tmp);
        //console.log(this.books);
      })
  }

  getBooks(): IBook[] {
    return this.updateBooks.getValue();
  }
}
