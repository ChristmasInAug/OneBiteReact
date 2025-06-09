// const moduleData = require("./math");

import mul from "./math.js";
import {add, sub} from "./math.js";
import randomColor from "randomcolor";
// 동일한 경로의 임포트가 여러개라면
// import mul, {add, sub} from "./math.js"; 로 가능
// console.log("안녕 node.js");
// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(1,2));
const color = randomColor();
console.log(color);

/*
모듈이란?
회원관리기능/장바구니기능/결제기능이 한 파일에 있으면 관리에 어렵다
user.js/cart.js/payment.js 나눠서 관리하는것이 일반적이다.
각각의 js파일을 모듈이라고 부른다. user모듈/cart모듈/payment모듈

모듈 시스템
모듈을 생성하고 불러오고 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
common js(cjs) / ES Module(esm) 등이 있다.
* common js(cjs) / ES Module(esm)은 함께 사용 할 수 없다.
ReferenceError: require is not defined in ES module scope, you can use import instead
에러 메시지가 뜸

라이브러리란
프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해놓은 것
날짜라이브러리/수학라이브러리/그래픽라이브러리 등등
npmjs 구글에서 검색 관련된 라이브러리 찾아서 사용하면 됨
*/

