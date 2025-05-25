// 객체
// 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장 할 수 있는 자료형을 의미
// 객체를 이용허면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함.

// 1. 객체 생성

let obj1 = new Object() // 객체 생성자라는 내장함수를 이용하는 방식
let obj2 = {} // 빈 중괄호로 열어 객체 생성, 객체 리터럴 방식, 훨씬 간결하기에 대부분 이 방법을 사용

// 2. 객체 프로퍼티 (객체 속성) key : value
let person = {
    name : "박정하",
    age : 30,
    hobby : "테니스",
    extra : true,
    10 : 20,
    "like cat": true, // key 값에 띄어쓰기가 들어가야한다면 ""로 감싸줘야 함.
};
// 프로퍼티 갯수에 제한이 없고, value에 자료형의 타입에도 제한이 없다. 문자, 숫자, 배열, 함수 등 자유롭게 가능.


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
let name  = person.name; // -> 박정하를 가르킴, 점 표기법
console.log(name);

let age = person["age"]; // 괄호 표기법
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
// delete 연산자를 사용
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person
console.log(result2); // 존재유무에 따라 true or false을 반환