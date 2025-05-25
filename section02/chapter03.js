// 구조 분해 할당
// 배열이나 객체에 저장된 여러가지 값들을 말 그대로 분해하여 각각 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let one1 = arr[0];
let two1 = arr[1];
let trhee1 = arr[2];
// 기존에 이렇게 할 것임

let [one, two, three] = arr;
// 이렇게 하면 1은 one에, 2는 two, 3는 three 변수에 저장 됨.
console.log(one,two,three);
let [one2, two2] = arr;
console.log(one2, two2);

let [one3, two3, three3, four3 = 4] = arr;
console.log(one3, two3, three3, four3);
//arr 배열에 4가 없어도 이렇게 초기화를 함께 선언할 수도 있다.

// 2. 객체의 구조 분해 할당
let person = {
    name : "박정하",
    age : 27,
    hobby : "테니스"
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby; 
// 기존에는 이렇게 해야 한다.

let {name, age, hobby, extra = "hello"} = person;
console.log(name, age, hobby, extra);
// 이렇게 가능

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
//           이 부분에 person 매개변수가 아니라 구조분해 할당으 해줌.
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}
func(person); // person으로 객체를 넘겼을 때에만 구조 분해 할당이 가능

// 원래는 이렇게 했을 것임
// const func - (person) => {
//     person.name
//     person.age
//     person.hobby
// }