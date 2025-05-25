// Truthy & Falsy

// js에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// js의 모든 값은 truthy(참 같은 값)하거나 falsy(거짓 같은 값) 함.

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 ="";
let f7 = 0n; // 0n 빅 인티저로 특수한 자료형에 해당하는 값, 아주 큰 값을 저장하는데 사용하는 값. 웹개발엔 잘 사용하지는 않음.
// 위 값은 falsy한 값으로서 조건문에서 거짓으로 판단 된다.
if(!f1) {
    console.log("falsy");
}

// 2. Truthy 한 값
// 7가지 falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};
if (t4) {
    console.log("Truthy");
}

// 3. 활용 사례
function printName(person) {
    if(!person) { // person의 값이 없다면 undefiend가 된다 이부분을 truty/falsy을 이용하여 안내해줄 수 있다.
        console.log("person의 값이 없음")
        return;
    }
    console.log(person.name)
}

let person = {name : "박정하"}; // person 값이 매개변수를 받아야하는데 만약 없어서 undefined가 되어 있다면, 이럴 때 함수 안에 truthy/falsy을 사용.
printName(person);