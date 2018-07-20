/******************** interface ***********************/
var myBook;
myBook = {
    bookName: '젋은 베트테르의 슬픔',
    bookAuthor: '괴테',
    bookPrice: 18000
};
// 2. Parameter Type Check
function printBookInfo(paramBook) {
    //console.log(paramBook);
}
printBookInfo(myBook);
function printBookInfo2(parameter) {
    //console.log(parameter.bookName);
    //console.log(parameter.getName());
}
var myBook2 = {
    bookName: '젋은 베트테르의 슬픔',
    bookAuthor: '괴테',
    getName: function () {
        return this.bookName;
    }
};
printBookInfo2(myBook2);
var p1 = { x: 10, y: 20 };
// p1.x = 20;  ==> 오류
p1.y = 30;
// TypeScript는 또 ReadOnlyArray<T> 형태의 Array를 지원한다. 생성된 후에는 Array를 변경할 수 없다.
var arr = [1, 2, 3, 4];
var readArray = arr;
//readArray[0] = 100;   //코드에러
//readArray.push(5);    // 코드에러
//arr = roArray // 코드에러
arr = readArray; // 가능
var myFunc = function name(myName, myAge) {
    //console.log(`이름 : ${myName}, 나이 : ${myAge}`);
};
myFunc('훈', 30);
var obj2 = {
    myName: '홍길동',
    myAddress: '난곡동'
};
var keys = Object.keys(obj2); // 객체의 key값들에 대한 배열 획득
for (var i = 0; i < keys.length; i++) {
    //console.log(obj[keys[i]]);
}
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        this.myName = name;
        this.myAddress = address;
        this.myAge = age;
    }
    Person.prototype.printInfo = function (obj) {
        Object.keys(obj).forEach(function (t) { return console.log(obj[t]); });
    };
    ;
    return Person;
}());
var obj4 = new Person('홍길동', '서울', 30);
var PersonFactory = {
    getInstance: function name(construct, name, age) {
        return new construct(name, age);
    }
};
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.myName = name;
        this.myAge = age;
    }
    Person2.prototype.printInfo = function () {
        console.log("\uC774\uB984: " + this.myName + ", \uB098\uC774: " + this.myAge);
    };
    return Person2;
}());
var obj5 = PersonFactory.getInstance(Person2, '멋진훈', 45);
obj5.printInfo();
var square = {};
square.color = 'red';
square.sideLength = 10;
// interface는 type check를 위해 사용되기 때문에 interface로는 객체를 생성 할수 없다.
