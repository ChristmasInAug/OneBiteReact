// 배열
// 여러개의 값을 순차적으로 담을 수 있는 자료형
// 배열 음식 : 떡볶이(0), 초콜릿(1), 삼겹살(2),...,육회(9)

// 1. 배열 생성
let arrA = new Array() // 배열 생성자
let arrB = []; // 배열 리터럴, 대부분 사용

let arrC = [
    1, 2, 3, true, "hello", null, ()=>{}, {}, []];
    // 어떠한 형태도 가능

// 2. 배열 요소 접근
// 각각의 원소에 번호로 접근 가능
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2);

arrC[0] = "hello";
console.log(arrC);
