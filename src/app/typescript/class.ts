
/**************** Class  ***************/

// 1. TypeScript class

class Book {
  btitle: string;
  bauthor: string;

  constructor(title:string, author:string) {
    this.btitle = title;
    this.bauthor = author;
  }

  // 상위 클래스의 method의
  // 입력 인자가 있으면 사룡하고 없으면 default 사용
  protected printInfo(input:string = 'Initial'): void {
    console.log(input);
    console.log(`제목: ${this.btitle}, 저자: ${this.bauthor}`);
  }
};
let book = new Book('Angulr', '훈');
//book.printInfo();


// 2. Inheritance
class Ebook extends Book {
  btype: string;

  constructor(title:string, author:string, type:string) {
    super(title, author);
    this.btype = type;
  }

  // method overriding
  printInfo() {
    super.printInfo();
    console.log(`제목: ${this.btitle}, 저자: ${this.bauthor}, 타입: ${this.btype}`);
  }
}

let ebook = new Ebook('태백산맥', '조정래', '역사');
//ebook.printInfo();



// 3. Access Modifier
// 접근제어 연산자는 public, protected, private 가 있으며 default 는 pulblic 이다.
// public: 접근제한이 없다.
// protected: class 외부에서는 접근할수 없다. 단, 상송받은 하위 clas에서는 접근이 가능하다.
// private: class 외부에서 접근할수 없다. 상속받은 하위 class에서도 접근이 불가능하다.
//          일반적으로 private으로 선언된 변수나 함수는 _ 를 관용적으로 써주게 된다.



// 4. ReadOnly property
// readOnly로 지정되면 property가 선언될때 혹은 생성자 안에서 반드시 초기화를 진행해야 한다.

class Book2 {
  public readonly btitle: string;

  constructor(btitle: string) {
    this.btitle = btitle;
  }
}
let book2: Book2 = new Book2('Underscore');
//book2.btitle = 'sdfsd'  코드 에러


// 생성자의 parameter를 readonly 로 선언하면 따로 class의 property로 선언할 필요가 없다.
class Book3 {

    constructor(readonly btitle: string) {
        this.btitle = btitle;
    }

}

let book3:Book3 = new Book3('젊은 베르테르의 슬픔');

//console.log(book3.btitle);



// 5. Static property
class Book4 {
  public bTitle: string;
  static count: number = 0;

  constructor(bTitle:string){
    this.bTitle = bTitle;
    Book4.count++;
  }
}

let book4:Book4 = new Book4('빨강');
let book5:Book4 = new Book4('노랑');
//console.log(Book4.count);


// 6. Abstract class
abstract class Book5 {
  public btitle: string;

  constructor(btitle:string) {
    this.btitle = btitle;
  }

  abstract printInfo(): void;

}

class Ebook2 extends Book5 {
  printInfo(): void {
    console.log(this.btitle);
  }
}



// 7. interface의 의미로 class 사용
// class를 확장해서 interface를 정의 할수 있다.

class Book6 {
  btitle: string;
}

interface EBook3 extends Book6 {
    bauthor: string;
}

let book6:EBook3 = {
    btitle: '파우스트',
    bauthor: '괴테'
};
