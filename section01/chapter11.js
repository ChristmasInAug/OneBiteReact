// 함수
// 중복으로 작성된 유사한 기능을 하는 코드들은 일일이 타이핑 하면 생산성이 떨어지고 향후 코드 수정시 문제 될 수 있음.

// 함수선언
// 함수를 새롭게 만드는 행위.
// 함수는 선언한다고 실행되는 것이 아님, 호출 할 때만 실행이 됨.

function greeting() { // 함수 선언
    // 함수가 실행 해야하는 코드를 작성
    console.log("안녕하세요!");
}
// 함수가 호출 되면 프로그램 실행 순서가 함수 내부로 넘어 감.
console.log("호출 전");
greeting(); // 함수 호출
console.log("호출 후");

/* 
13번~15번줄 실행 순서가 어떻게 되나면.
1. function greeting() 함수 선언
2. console.log("호출 전");
3. greeting();
4. 3번 함수 실행
5. onsole.log("호출 후");
*/

// 직사각형 넓이를 구하는 함수
function getArea(width, height) { // width, height와 같이 매개변수 라고 함.
    let area = width * height;
    console.log(area);
}

getArea(10, 20); //"10, 20"와 같이 함수에 전달한 값을 각각 인수 라고 함.
getArea(40, 20);

function getArea2(width, height) {
    let area = width * height;
    return area; // 반환 값. 함수 호출의 결과 값. return을 이용하면 함수가 어떠한 결과 값을 반환하도록 만들어 줄 수 있음.
    console.log("hello"); // return문이 나오면 함수가 종료가 된다. 아래에 코드를 작성하여도 실행되지 않음.
}
let area1 = getArea2(30, 50);
console.log(area1);

// js에서는 함수 안에 함수를 선언할 수도 있다. 중첩 함수
function getArea3(width, height) {
    function another() { // 중첩 함수
        console.log("another");
    }
    another();
    let area = width * height;
    return area; 
}
let area3 = getArea3(1000, 200);

// 호이스팅
// js에서는 함수선언을 함수 호출보다 아래에 둬도 아무 문제 없이 실행이 된다.
// 다른 언어에서는 선언하지 않은 함수를 미리 호출 하면 에러가 발생한다 
// 호이스팅 기능 때문 -> 끌어올리다 뜻.

