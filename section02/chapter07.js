// 배열 메서드 1. 6가지 요소 조작 메서드

// 1. push 메서드
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1, 2, 3];
arr1.push(4,5,6); // 여러개 추가도 가능
// 요소를 추가한 다음에 변환된 배열의 길이를 반환 한다.
const newLength = arr1.push(7);
console.log(arr1);
console.log(newLength);

// 2. pop 메서드
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,5];
const popedNum = arr2.pop();
console.log(popedNum); // 5 출력
console.log(arr2); // [1,2] 출력

// 3. shift 메서드
// 배열에서 하나의 요소를 제외하는 메서드. 배열의 맨 앞에 있는 요소를 제거, 반환.
let arr3 = [1,2,5];
const shiftedNum = arr3.shift();
console.log(shiftedNum); // 1, 출력
console.log(arr3); // [2,5] 출력

// 4. unshift 메서드
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드, 변경된 배열의 길이를 반환
arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // 4, [0,1,2,3] 출력

// shift와 unshift는 push와 pop 보다 느리게 동작한다.
// [1, 2, 3] 배열이 있을 때 배열은 index와 함께 순차적으로 자료를 저장하는 자료형이다. 
// push처럼 3 뒤에 4를 새로이 추가하는 것이면 차례대로 맨 뒤에 저장하면 된다.
// shift처럼 맨 앞에 요소를 제거하는 거면 0번 index를 삭제하고 index 1번을 0번으로 수정하고 2번은 없어져야 한다. 
// 이런 비효율적인 방식으로 동작하기 때문에 비교적 느리게 동작하게 되는 것. 
// 이왕이면 push와 pop으로 해결 하는 것이 좋음.

// 5. slice 메서드
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1,2,3,4,5];
const sliced = arr5.slice(2,4); 
console.log(sliced); // [3,4] 출력
console.log(arr5); // 원본 배열은 변경되지 않는다.
const sliced2 = arr5.slice(2); // 끝까지 잘라낼 것이면 그냥 slice(2)라고만 하면 끝까지 짤림.
console.log(sliced2);
const sliced3 = arr5.slice(-1); // 음수를 이용하면 뒤에서 부터 짤라 낼 수 있음.
console.log(sliced3); // 5 출력


// 6. concat
// 두 개의 서로 다른 배열을 이어 붙어서 새로운 배열을 반환

let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);

















