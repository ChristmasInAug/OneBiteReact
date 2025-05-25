// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date() // 생성자, 인수를 전달하지 않으면 현재지금시간을 생성
console.log(date1); // Tue May 20 2025 04:47:28 GMT+0900 (한국 표준시) 출력

let date2 = new Date("1997-01-07/10:10:10"); // -, ., / 다 가능
console.log(date2); // Tue Jan 07 1997 09:00:00 GMT+0900 (한국 표준시) 출력

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초(UTC)"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 기준이 되는 시간을 UTC(협정세계시)라 함.

let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1; // js에서 1월이 0으로 출력됨 그래서 +1을 해주는 것.
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds); //2025 5 20 4 56 34 출력

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(50);
date1.setSeconds(55);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간제외하고 날짜만 출력 Thu Mar 30 2023
console.log(date1.toLocaleString()); // 현지에 맞게 출력됨. 2023. 3. 30. 오후 11:50:55