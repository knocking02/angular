/*######## TypeScript Data Type ############*/

// 1. boolean
let myVar: boolean = false;
let myBooleanVar: Boolean = new Boolean(true);


// 2. number
// TypeScript 는 정수와 실수를 구분하지 않는다. 모두 실수다.
let count: number = 6;

// 3. string
let myStr: string = 'Hello';
let myNumber: number = 100;

let myTemplateString = `this is
a
sample Tex =>${ this.myNumber + 100 }
myStr: ${this.myStr}`;
//console.log(myTemplateString);

// 4. Array
let myArr: string[] = ['Hello', 'Hi', '안녕하세요'];
let myNumArr: Array<number> = [1, 2, 3, 4];

// 5. Tuple
// 배열의 각 원소에 대하 각기 다른 data type을 허용한다.
/*
let myTuple: [string, number];
myTuple = ['Hellow', 100]; // 가능
myTuple = ['Hellow', 'World'];  // 불가능

let myTuple: [string, number];

myTuple = ["Hello", 100]; // 가능

myTuple[2] = "World"; // 가능
myTuple[2] = 200;     // 가능
myTuple[2] = true;    // 불가능( 코드 에러 ) ==> 초기 선언시 string, number 만 가능
*/

// 6. enum
enum Color {Red, Green, Blue};
let myColor: Color = Color.Red;
//console.log(myColor);   // 0 출력

enum Color2 { Red = 2, Green, Blue = 4} // Color2.Red 값을 2로 설정하면 그 다음원소들은 2부터 1씩 증가
let myColor2: Color2 = Color2.Green;
//console.log(myColor2);  // 3출력
myColor2 = Color2.Blue;
//console.log(myColor2);  // 4출2

enum Color3 { Red = 1, Green, Blue};
//let myColorStr: string = Color3.Green;  // 코드 에(문자열에 숫자 입력 안)
let myColorStr: string = Color3[2];
//console.log(myColorStr);  // Green 출력


// 7. any
// : 사용하지 않는편이 좋다.
let myAnyVar: any = 100;
myAnyVar = 'Hellow';  // 가능
myAnyVar = true;  // 가능
let myAnyArr: any[] = [100, 'hellow', true];  // 가능


// 8. void
let myVoidVar: void;
// myVoidVar = 100;  // 불가능
// myVoidVar = 'helow'  // 불가능
myVoidVar = null; // 가능
myVoidVar = undefined; // 가능
//주의해야 할점은 tsconfig.json파일안에 compilerOptions 부분에 "strictNullChecks": false option을 설정해야 한다는 것입니다.


// 9. null & undefined
let myNull: null = null;
let myUndefined: undefined = undefined;


// 10. never
// 일반적으로 함수의 리턴 타입으로 사용된다.
// 해당 함수는 항상 exception을 발생시키던가,
// 혹은 절대 return 되지 않는다는 것을 의미한다.(ex 무한루프)
function error(message: string): never {
  throw new Error(message);
}
//error('Hun exceptions Error : SomeThing Wrong!!');

function infiniteLoop(): never {
  while(true) {

  }
}

// 11. Type assertions
// 컴파일러에게 '이 타입 사용이 맞아!!' 라는 의미를 전달하는것이다.
// any data type과 함께 사용되는 경우가 많으며 데이타 타입을 한정지어서 사용할수 있도록 도와주도록 한다.
let myAssVal: any = 'Hello world';
let myValCount: number = (<string>myAssVal).length;

myValCount = (myAssVal as string).length;
//console.log((<number>myAssVal).toFixed());  // TypeError




/**************** 변수 선언 *****************/

// 1. var
function myFunc2(init) {
  if(init) {
    var x = 10;
  }
  return x;
}
//console.log(myFunc2(true));   // 10 출력

// 위의 코드는 javascript 코드이다.
// var 변수는 if block 안에서 선언되어 있음에도 block 외부에서도 사용가능하다.
// 이런 특성을 'var은 function-scoping을 가진다'' 라고 표현한다.

for(var i=0;i<10;i++){
//  console.log(i);
} // ==> 0 1 2 3 ~~ 9 출력

for(var i=0;i<10;i++){
  setTimeout(function() {
      //console.log(i);
  },1000)
} // ==> 10 10 10 10 ~~ 출력

for (var i = 0; i < 10; i++) {
  (function (tmp) {   // 즉시 실행되는 함수. IIFE (Immediately Invoked Function Expression)
      setTimeout(function () {
          //console.log(tmp);
      },1000)
  })(i);
} // ==> 0 1 2 3 ~~ 9 출력


// 2. let
// var의 모호성을 let을 이용해 해결할수 있다.
// 즉 let은 block-scoping을 가진다.
// 또한 변수의 중복 선언이 가능하지 않다 (var 은 중복 가능)
function myFunc3(input: boolean) {    let a: number = 100;

    if(input) {
      let b: number = a + 1;
      return b;
    }
    //return b;   // 코드 에러
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      //  console.log(i);
    },1000)
} // ==> 0 1 2 3 ~~ 9 출력


// 3. const
// const로 선언된 변수에는 재 할당이 불가능하다.
const myName: string = '홍길동';
//myName = '심청이';   // 코드에러

const countNum: number = 100;
const myProfile = {
  myName: '홍길동',
  myAddress: '서울',
  myCount: countNum
}

// const 변수가 객체를 지칭하게 되면 다른 객체로 reference를 바꾸지는 못하지만
// 현재 reference 하고 있는 객체의 속성에 대해서는 값을 변경 할 수 있다.
// myProfile = {                  // 코드 에러 ( re-assign 안됨 )
//     myName: "강감찬",
//     myAddress: "인천",
// };
myProfile.myName = "강감찬";   // 가능
myProfile.myAddress = "인천";
myProfile.myCount = 10;



/*********************** TypeScript Destructuring ********************/

// 1. Array Destructturing

let myDesArr: string[] = ['Hello', 'World', 'Moon'];
let first: string = myDesArr[0];
let second: string = myDesArr[1];
let third: string = myDesArr[2];
// console.log(first);
// console.log(second);
// console.log(third);

// 위 코드를 Destructuring Assignment(비구조할당)을 이용하면 아래와 같다.
let [first1, second1, third1] = myDesArr;
// console.log(first1);
// console.log(second1);
// console.log(third1);

// 데이타 타입 지정
let [first2, second2, third2]: string[] = myDesArr;

// swap 처리
let [first3, second3, third3] = myDesArr;
// console.log(first3);
// console.log(second3);
// console.log(third3);

[first3, second3, third3] = [third3, first3, second3];
// console.log(first3);
// console.log(second3);
// console.log(third3);

// 이런방식은 함수에 parameter를 전달할대도 사용 할수 있다.
function myFunc4([x, y]: [number, number]): void {
    //console.log(`x의 값은 ${x}`);
    //console.log(`y의 값은 ${y}`);
}
myFunc4([10,100]);

let myDesArr2: number[] = [1, 2, 3, 4];
let [first4, ...others] = myDesArr2;
//console.log(first4);  // 1 출력
//console.log(others);  // [2, 3, 4] 출력 (서브배열)

let[first5] = myDesArr2;
let[, second5, , fourth] = myDesArr2;
//console.log(first5);
//console.log(second5);
//console.log(fourth);



// 2. Object Destructuring
let obj = {
  key1 : "Hello World",
  key2 : 100,
  key3 : "TypeScript"
};
let {key1:a, key2:b, key3:c, key2: d} = obj;
// 위를 데이타 타입을 지정한다면
//let {key1:a2, key2:b2, key3:c2} : {key1:string, key2:string, key3:string} = obj;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

let {key1, key2} = obj;
// console.log(key1);
// console.log(key2);

let {a1, b1} = {a1: 'Hellow World', b1: 100};
// console.log(a1);
// console.log(b1);

let obj2 = {
    myName2: "홍길동",
    myAddress2: "서울",
    myAge2: 30
};
let {myName2, ...otherInfo} = obj2;
// console.log(`나의 이름은 : ${myName2}`);
// console.log(`사는곳은 : ${otherInfo.myAddress2}`);
// console.log(`나이는 : ${otherInfo.myAge2}`);

let obj3: {myName: string, myAge?: number} = {
  myName : '홍길동'
}
//console.log(obj3);

let {myName:uName, myAge:uAge = 30} = obj3;   // default값 설정
// console.log(uName);
// console.log(uAge);

// Destructuring 사용예
// let map = new Map();
//
// map.set("myName","홍길동");
// map.set("myAddress","서울");
// map.set("myAge",30);
//
// for(let [key, value] of map) {
//     console.log(`${key} 의 값은 ${value} 입니다.`);
// }
//
// for(let [key] of map ) {
//     // 모든 key 값만을 출력할 수 있습니다.
//     console.log(`${key}`);
// }
//
// for(let [,value] of map ) {
//     // 모든 value 값만을 출력할 수 있습니다.
//     console.log(`${value}`);
// }

// 리턴값이 두개 이상일때 편하다.
function myFunc5(): string[] {
  let arr: string[] = [];
  // 로직 처리 ~~
  arr[0] = '첫번째 결과값';
  arr[1] = '두번째 결과값';
  return arr;
}

let [result1, result2] = myFunc5();
// console.log(result1);
// console.log(result2);

function myFunc6(): {result1: string, result2?:number} {
    let obj = {
      result1: '',
      result2: 0
    };
    // 로직 처리 ....
    obj.result1 = '첫번째 결과값';
    obj.result2 = 100;

    return obj;
}
let {result1:first6, result2:second6} = myFunc6();
console.log(first6);
console.log(second6);
