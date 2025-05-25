// 배열 메서드 2. 순회와 탐색

// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1,2,3];
// 이 배열의 모든 요소에 x2를 한 값을 나타내고 싶다면,

//         (현재요소의 값, 현재 반복 카운트, 전체 배열의 값)
arr1.forEach(function (item, idx, arr) {
    console.log(idx, item*2);
});
// forEach 함수가 배열의 요소들을 마치 반복문 처럼 순회하면서 매 반복마다 콜백함수를 호출하고, 
// 매개변수로 현재요소의 값과 현재 반복 카운트, 전체 배열의 값을 전달. 
// 콜백함수는 배열의 요소의 갯수만큼 호출 

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item*2);
});
console.log(doubledArr)

// 2. includes 메서드
// 배열의 특징 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3); // 3이 있는지 찾아서 반환
console.log(isInclude); // 있으면 true, 없으면 false 반환


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index); // 2가 1번 인덱스에 있으니 1이 출력, 존재하지 않을 때는 -1이 출력

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// '콜백함수를 만족하는' 라는 말은 콜백함수가 참을 반환한다는 말.
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item) => {
    if (item % 2 !== 0) return true;

});
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0); 이렇게도 줄여서 가능.
console.log(findedIndex);// 존재하지 않는다면 -1을 반환.

// findIndex가 indexOf로 가능한데 왜 필요한가. 
// indexOf는 배열에 원시타입이 아니라 객체타입의 배열에서는 정확한 위치를 찾을 수 없다.

let objectArr = [
    {name : "박정하"},
    {name : "홍길동"}
];

console.log(objectArr.indexOf({name : "박정하"})); // -1이 출력됨.
// indexOf는 기본적으로 얉은 비교로 동작하기 때문에 객체 값은 찾지 못함. 얉은 비교는 동등비교연산자로 비교하는 것.
console.log(objectArr.findIndex((item) => item.name === "박정하")); // 0 으로 정확한 위치를 찾아 냄.
// findIndex는 콜백함수를 이용해 특정 프로퍼티 값을 기준으로 비교 할 수 있기 때문에 복잡한 객체식도 조건식만 잘 만들면 찾아 낼 수 있음.


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name : "박정하"},
    {name : "홍길동"}
];

const finded = arr5.find(
    (item) => item.name === "박정하"
);

console.log(finded); //  {name : "박정하"} 출력