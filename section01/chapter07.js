// 연산자1

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// *, /, % 연산자가  +,- 연산자보다 우선순위가 높다.
let num6 = (1 + 2) * 10;
console.log(num6);


// 3. 복합 대입 연산자
// 산술 + 대입
let num7 = 10;
num7 += 20;
num7 -= 20;
// num7에 20을 더해라.
// '=' 앞에 모든 연산기호가 올 수 있다.
console.log(num7)

// 4. 증감 연산자
let num8 = 10;
num8++; // 여기가 끝나야 증가 된다. console.log(num8++); 이러면 출력이 증감없이 출력됨. 
//console.log(num8 += 1)을 해야함. 또는 console.log(++num8)을 해야함
console.log(num8);
console.log(num8++); // 후위 연산
console.log(++num8); // 전위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
// '==' 두번만 사용 할 경우, 값 자체 비교는 가능한데 자료형까지 비교되지는 않음. 
console.log(comp1, comp2)

let comp3 = 2 > 1; // 2가 1보다 크냐
let comp4 = 2 < 1; 
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);