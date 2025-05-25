// 배열 메서드 3. 변형

// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "박정하", hobby : "테니스"},
    {name : "김효빈", hobby : "테니스"},
    {name : "홍길동", hobby : "독서"},
];

const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스") 
        return true;
});

console.log(tennisPeople);
// {name : "박정하", hobby : "테니스"},
// {name : "김효빈", hobby : "테니스"}, 출력 됨.

// filter메서드는 웹서비스 개발 할 때 특정 조건에서 검색하는 기능이나 카테고리별 필터 기능을 만들 때 필수적으로 사용됨.

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환.
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
});
console.log(mapResult1); // [2,4,6] 출력

const names = arr1.map((item) => item.name );
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);//  [a,b,c] 출력
// 숫자인 배열일 경운 sort는 작동하지 않는다. 
// sort는 사전순으로 정렬하는 메서드. 숫자의 대소 비교가 아니다. 
// 숫자의 대소관계로 정렬하고 싶으면 비교하는 콜백함수를 설정해줘야 한다.
let arr3n = [10, 3, 5]
arr3n.sort((a,b) => {
    if (a>b) {
        // b가 a 앞에 와라
        return 1; // => b, a 배치
    } else if (a<b) {
        // a가 b 앞에 와라
        return -1; // => a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a,b 자리를 그대로 유지
    }
});// 내림차순을 원하면 반대로 하면 됨.
console.log(arr3n) // [3, 5, 10] 출력

// 4. toSorted(최근에 추가된 최신 함수)
// 배열을 정렬하는 메서드 sort는 원본 배열을 정렬하는 메서드
// toSorted는 원본 배열은 그대로 두고 새로운 배열을 반환하는 메서드

let arr5 = ["b", "a", "c"];
const sotred = arr5.toSorted();
console.log(arr5);
console.log(sotred);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(); // join("-"), join(" ") 식으로 ','를 대체 가능
console.log(joined); // hi,im,winterlood 출력
