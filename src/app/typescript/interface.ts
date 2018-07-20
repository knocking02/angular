
/******************** interface ***********************/

// 1. TypeScript interface

// 새로운 데잍 타입을 만드는 추상 데이터 타입(abstrach data type)으로 사용되며
// 일반 변소, 함수, 클래스의  type check을 위해 사용된다.
// interface 안에 명시된 property의 선언과 method의 구현이 강제되기 때문에 프로그래밍의 일관성을 확보할수 있다.

interface IBook {
    bookName: string,
    bookAuthor: string,
    bookPrice: number
}
let myBook: IBook;
myBook = {
  bookName: '젋은 베트테르의 슬픔',
  bookAuthor: '괴테',
  bookPrice: 18000
}


// 2. Parameter Type Check
function printBookInfo(paramBook: IBook): void {
  //console.log(paramBook);
}
printBookInfo(myBook);


// 3. Duck Typing


// 4. Optional Properties
interface IBook2 {
    bookName: string,
    bookAuthor: string,
    bookPrice?: number,   // Optional property

    getName(): string
}

function printBookInfo2(parameter: IBook2) {
    //console.log(parameter.bookName);
    //console.log(parameter.getName());
}

let myBook2: IBook2 = {
  bookName: '젋은 베트테르의 슬픔',
  bookAuthor: '괴테',
  getName: function () {
    return this.bookName
  }
}

printBookInfo2(myBook2);


// 5. ReadOnly Properties
interface Point {
    readonly x: number;   // 수정 불가
    y: number;
}

let p1: Point = {x: 10, y:20};
// p1.x = 20;  ==> 오류
p1.y = 30;

// TypeScript는 또 ReadOnlyArray<T> 형태의 Array를 지원한다. 생성된 후에는 Array를 변경할 수 없다.
let arr: number[] = [1, 2, 3, 4];

let readArray: ReadonlyArray<number> = arr;
//readArray[0] = 100;   //코드에러
//readArray.push(5);    // 코드에러

//arr = roArray // 코드에러
arr = readArray as number[] // 가능


// 6. Function Types
interface myInterface {
    (myName: string, myAge: number): void;
}

let myFunc: myInterface = function name(myName: string, myAge: number) {
    //console.log(`이름 : ${myName}, 나이 : ${myAge}`);
}
myFunc('훈', 30);


// 7. Indexable Types
interface IObj {
    [idx: string]: string
}
let obj2: IObj = {
  myName: '홍길동',
  myAddress: '난곡동'
};

let keys = Object.keys(obj2)   // 객체의 key값들에 대한 배열 획득

for (let i = 0; i < keys.length; i++) {
  //console.log(obj[keys[i]]);
}
//==> 너무 어려워서 나중에 공부


// 8. Class Types
interface IPerson {
    [idx: string]: string | number | Function;
    myName: string;
    myAddress: string;
    myAge: number;

    printInfo(obj: IPerson): void;
}

class Person implements IPerson {
  [idx: string]: string | number | Function;
  myName: string;
  myAddress: string;
  myAge: number;
  printInfo(obj: IPerson): void {
    Object.keys(obj).forEach(t => console.log(obj[t]));
  };

  constructor(name:string, address:string, age:number) {
    this.myName = name;
    this.myAddress = address;
    this.myAge = age;
  }
}

const obj4 = new Person('홍길동', '서울', 30);
//obj4.printInfo(obj4);

// const PersonFactory = {
//   getInstance: function name(construct: any, name:string, age:number) {
//       return new construct(name, age);
//   }
// }

interface IPersonConstructor {    // insterface로 constructor의 타입을 지정해줄수 있다.
    new (n:string, a:number): Person2
}

const PersonFactory = {
  getInstance: function name(construct: IPersonConstructor, name:string, age:number) {
      return new construct(name, age);
  }
}

class Person2 {
  myName: string;
  myAge: number;

  constructor(name:string, age:number){
    this.myName = name;
    this.myAge = age;
  }

  printInfo() {
      console.log(`이름: ${this.myName}, 나이: ${this.myAge}`);
  }
}

let obj5 = PersonFactory.getInstance(Person2, '멋진훈', 45);
obj5.printInfo();



// 9. interface의 확장
// 하나의 interface는 다른 interface를 상속 받을수도 있다 (엄격히 얘기해서 확장)
interface Shape {
    color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = 'red';
square.sideLength = 10;

// interface는 type check를 위해 사용되기 때문에 interface로는 객체를 생성 할수 없다.
