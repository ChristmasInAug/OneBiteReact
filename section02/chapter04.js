// Spread 연산자 & Rest 매개변수

// 1. Spread 연산자
// Spread : 흩뿌리다, 펼치다 라는 뜻으로, 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
//let arr2 = [4,5,6];
// arr2 = [4,1,5,2,6,3]을 하고 싶다면
// let arr2 [4, arr1[0], 5, arr1[1], 6, arr1[2]] 식으로 해야 함.
// 귀찮기도 하고 arr1에 배열이 추가/삭제가 될 수도 있기에 위험한 방법이다.
// 이럴 때 spread 연산자 사용
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a : 1,
    b : 2,
};

let obj2 = {
    
    c :3, ... obj1,
    d : 4,
}
console.log(obj2);

function funcA (p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// rest는 나머지, 즉 나머지 매개변수
// 함수에서 여러개의 매개변수를 받아야 할 때 배열 형태로 한번에 여러개 매개변수를 받아 올 수 있도록 하는 문법

function funcB(one, ...rest){
    console.log(one, rest);
}
funcB(2, ...arr1);
// 함수를 호출 할 때 arr1로 여러개 인수가 전달 될 때, rest 매개변수를 이용하면 한번에 모든 매개변수를 받아 올 수 있다.
// 배열 형태로 저장 됨.
// rest 매개변수 뒤에는 추가로 매개변수를 선언할 수 없다. 
