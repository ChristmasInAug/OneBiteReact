// 함수 표현식과 화살표 함수

// 1. 함수 표현식
function funcA() {
    console.log("funcA 함수 호출");
}

let varA = funcA; // 함수를 호출하지 않고 함수 자체를 변수에 저장
console.log(varA);
// 함수 자체가 콘솔에 출력이 됨.
// js은 함수도 숫자열과 문자열과 같이 하나의 값으로 취급.
varA();

let varB = function funcB() {
    console.log("funcB 호출");
}
// 현재 function funcB(){}은 선언식이 아니다. 선언식은 특정 변수에 값으로 담기지 않은 상태로 있어야 한다.
// 값으로 함수가 생성 된 것. 그러므로 fucB()으로 함수를 호출 할 수 없다. 변수의 이름으로 불러야 한다.
varB();
//funcB(); // 에러가 발생함

/*
let varB = function() { // 익명함수
    console.log("funcB 호출");
}
이렇게 함수 이름 없이 만들 수 있다. 이런 함수를 익명함수라고 한다.
그리고 값으로서 함수를 만드는 것을 함수표현식이라고 한다.
*/

// 2. 화살표 함수
// 화살표 함수는 함수를 이전보다 더 빠르고 간결하게 생성 할 수 있도록 도와주는 자바스크립트 문법

let varX = function(){
    return1;
}
// 기존의 함수 생성 방식

let varC = () => {
    return 1;
}
console.log(varC());

// 바로 return을 반환해주는 경우에는 아래와 같이 작성 해도 된다.
let varD = () => 1;
console.log(varD());

// 매개변수가 필요한 경우
let varE = (value) => value + 1;
console.log(varE(10)); 

// 즉시 반환하는 것이 아닐 경우
let varF = (value) => {
    console.log(value);
    return value + 1;
};
console.log(varF(29));
