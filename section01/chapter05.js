// 05. 자료형(타입) - 원시타입
/* 
자형(Type) = 집합
동일한 속성이나 특징을 가진 원소들을 묶은것.
자료형
1)원시 타입
number, String, Boolean, Null, Undefined

2) 객체 타입
Object - array, function, regexExp

원시타입 
- 기본형 타입이라고도 불림
- 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미함.
*/

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); 
// 나머지을 구하는 연산을 프로그래밍에서 모듈려 연산이라고 부르기도 함.

let inf = Infinity;     // 양의 무한대
let minf = -Infinity;   // 음의 무한대

let nan = NaN;
// nan : not a number 수치 연산이 실패했을 때 결과 값으로 보통 사용
console.log(1 * "hello");  // nan 반환

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce); // 자바스크립트는 문자열 덧셈도 지원

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // ``으로 문자열을 만들면 `${변수}` 이런식으로 {}에 변수를 동적으로 넣을 수 있다.
console.log(introduceText);
// 템플릿 리터럴 문법이라고 부른다. 

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Tpye (아무것도 없다)
let empty = null;

// 5. Undefined Type 
let none; // Undefined :  변수를 설정하고 아무런 값도 할당하지 않았을 시 자동으로 들어가는 설정
console.log(none);
console.log(empty);  // null : 변수를 생성하고 명시적으로 변수에 할당을 해줘야하는 값.