// 객체2

// 1. 상수 객체
// 상수에 저장 해둔 객체

const animal = {
    type : "고양이",
    name : "나비",
    color :"black"

};
// animal = {a : 1}; // 오류 발생. 새로운 값을 할당하지를 못할 뿐, 프로퍼티의 추가, 수정, 삭제는 가능.
animal.age = 2; // 추가 
animal.name = "까망이"; // 수정
delete animal.color; // 삭제 
console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티를 말함.
const person = {
    name :"박정하",
    // 메서드
    sayHi : function (){
        console.log("안녕!");
    },
};
person.sayHi();
person["sayHi"]();

