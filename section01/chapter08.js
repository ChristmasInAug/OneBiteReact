// 연산자2

// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자.

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // '??'이 null 병합 연산자.
console.log(var4); 
// var1은 초기화가 안되어 있고(즉 undefined 상태임), var2는 10으로 초기화가 되어 있다. ??로 인해 undefined가 아닌 var2의 10을 출력함.
let var5 = var1 ?? var3;
console.log(var5); // 20 출력
// 연산에 참여하는 값들 중에 null이나 undefined 아닌 값을 찾아는 것.

let var6 = var2 ?? var3;
console.log(var6);
// 둘다 아닐 경우 첫번 째 var2의 값이 출력 됨.

// 실무에서 사용함 
// 회원가입에서
let userName = "박정하";
let userNickName = "Winterlood";
// 화면에 표시되는 이름에 username이 존재한다면 그것을 저장하고 없다면 usernickname을 저장하면 될 때 사용.
let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = 10;
var7 = true;
// 자바에서는 var7에 처음에 숫자 타입의 변수를 초기화 하여도 다음에 hello 문자타입을 저장하는 것이 가능하다.
// 변수 타입이 고정되어 있지 않다. 코드 실행에 따라 동적으로 숫자, 문자 등 타입으로 저장된다.
// 현재 변수에 저장된 값의 타입이 궁금할 때 사용.

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건실을 이용해서 참, 거짓일 때의 값을 다르게 반환.
let var8 = 11;
// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"

let res = var8 % 2 === 0 ? "짝수" : "홀수";
// '?'을 기준으로 왼편에는 조건식, 오른편에는 ':'을 기준으로 참일 때 반환값, 거짓일 때 반환 값을 차례대로 작성.
console.log(res);