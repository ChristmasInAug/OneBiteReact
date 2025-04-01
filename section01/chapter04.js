// 1. 변수
let age;

age = 30;

// 2. 상수 - 상수는 변수와 달리 한번 저장된 값을 바꿀 수 없다.
const birth = "1997.01.07"; // 선언하면서 값을 넣어주는 것을 초기화 라고 한다. 변수는 초기화를 해도 되고 안해도 되지만 상수에서는 선언 할 때 초기화를 해야 한다. 

// 변수와 상수가 값을 저장하고 자기의 이름을 가지는 것은 동일.

// 3. 변수 명명규칙(네이밍 규칙)
/*
3-1. $, _ 제외한 기호는 사용 할 수 없다.
3-2. 숫자로 시작 할 수 없다.
3-3. 예약어를 사용할 수 없다.(ex. let, cosnt 등)
let if, let let, let cosnt 같이 사용 할 수 없다.
*/

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;

