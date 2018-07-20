/**************** Class  ***************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. TypeScript class
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.btitle = title;
        this.bauthor = author;
    }
    // 상위 클래스의 method의
    // 입력 인자가 있으면 사룡하고 없으면 default 사용
    Book.prototype.printInfo = function (input) {
        if (input === void 0) { input = 'Initial'; }
        console.log(input);
        console.log("\uC81C\uBAA9: " + this.btitle + ", \uC800\uC790: " + this.bauthor);
    };
    return Book;
}());
;
var book = new Book('Angulr', '훈');
//book.printInfo();
// 2. Inheritance
var Ebook = /** @class */ (function (_super) {
    __extends(Ebook, _super);
    function Ebook(title, author, type) {
        var _this = _super.call(this, title, author) || this;
        _this.btype = type;
        return _this;
    }
    // method overriding
    Ebook.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("\uC81C\uBAA9: " + this.btitle + ", \uC800\uC790: " + this.bauthor + ", \uD0C0\uC785: " + this.btype);
    };
    return Ebook;
}(Book));
var ebook = new Ebook('태백산맥', '조정래', '역사');
//ebook.printInfo();
// 3. Access Modifier
// 접근제어 연산자는 public, protected, private 가 있으며 default 는 pulblic 이다.
// public: 접근제한이 없다.
// protected: class 외부에서는 접근할수 없다. 단, 상송받은 하위 clas에서는 접근이 가능하다.
// private: class 외부에서 접근할수 없다. 상속받은 하위 class에서도 접근이 불가능하다.
//          일반적으로 private으로 선언된 변수나 함수는 _ 를 관용적으로 써주게 된다.
// 4. ReadOnly property
// readOnly로 지정되면 property가 선언될때 혹은 생성자 안에서 반드시 초기화를 진행해야 한다.
var Book2 = /** @class */ (function () {
    function Book2(btitle) {
        this.btitle = btitle;
    }
    return Book2;
}());
var book2 = new Book2('Underscore');
//book2.btitle = 'sdfsd'  코드 에러
// 생성자의 parameter를 readonly 로 선언하면 따로 class의 property로 선언할 필요가 없다.
var Book3 = /** @class */ (function () {
    function Book3(btitle) {
        this.btitle = btitle;
        this.btitle = btitle;
    }
    return Book3;
}());
var book3 = new Book3('젊은 베르테르의 슬픔');
//console.log(book3.btitle);
// 5. Static property
var Book4 = /** @class */ (function () {
    function Book4(bTitle) {
        this.bTitle = bTitle;
        Book4.count++;
    }
    Book4.count = 0;
    return Book4;
}());
var book4 = new Book4('빨강');
var book5 = new Book4('노랑');
//console.log(Book4.count);
// 6. Abstract class
var Book5 = /** @class */ (function () {
    function Book5(btitle) {
        this.btitle = btitle;
    }
    return Book5;
}());
var Ebook2 = /** @class */ (function (_super) {
    __extends(Ebook2, _super);
    function Ebook2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ebook2.prototype.printInfo = function () {
        console.log(this.btitle);
    };
    return Ebook2;
}(Book5));
// 7. interface의 의미로 class 사용
// class를 확장해서 interface를 정의 할수 있다.
var Book6 = /** @class */ (function () {
    function Book6() {
    }
    return Book6;
}());
var book6 = {
    btitle: '파우스트',
    bauthor: '괴테'
};
