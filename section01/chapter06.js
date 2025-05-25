// 06. 형변환(Type Casting)
/*
어떤 값의 타입을 다른 타입으로 변경하는 것을 말함.

묵시적 형 변환(암묵적 형변환)
- 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형변환 하는 것을 말함

명시적 형 변환
- 개발자가 직접 함수 등을 이용해 형 변환을 일으킴
*/

// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);
// num의 형이 묵시적으로 string으로 형변환이 되어 "10" + "20"이 되어 1020이 출력 됨.

// 2. 명시적 형 변환
// 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 내장함수 : 자바스크립트가 기본적으로 제공하는 함수
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10+strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN 출력. 수치 연산 실패 , parseInt사용 하면 가능
let strToNum20 = parseInt(str2);
console.log(strToNum20); // 10 출력 됨.

// 숫자 -> 문자 형 변환
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");





