export class Hello {

  /*######## TypeScript Data Type ############*/
  // 1. boolean
  myVar: boolean = false;
  myBooleanVar: Boolean = new Boolean(true);


  // 2. number
  // TypeScript 는 정수와 실수를 구분하지 않는다. 모두 실수다.
  count: number = 6;

  // 3. string
  myStr: string = 'Hello';
  myNumber: number = 100;

  myTemplateString = `this is
  a
  sample Tex =>${ this.myNumber + 100 }
  myStr: ${this.myStr}`;

  // 4. Array
  myArr: string[] = ['Hello', 'Hi', '안녕하세요'];
  myNumArr: Array<number> = [1, 2, 3, 4];

  // 5. Tuple
  // 배열의 각 원소에 대하 각기 다른 data type을 허용한다.
  /*
  myTuple: [string, number];
  myTuple = ['Hellow', 100]; // 가능
  myTuple = ['Hellow', 'World'];  // 불가능

  let myTuple: [string, number];

  myTuple = ["Hello", 100]; // 가능

  myTuple[2] = "World"; // 가능
  myTuple[2] = 200;     // 가능
  myTuple[2] = true;    // 불가능( 코드 에러 ) ==> 초기 선언시 string, number 만 가능
  */

  // 6. enum
//  enum Color {Red, Green, Blue};


}
