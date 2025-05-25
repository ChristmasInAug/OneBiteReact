// 비동기 작업 처리하기 1. 콜백 함수

function task(){
    setTimeout(() => {
        console.log("안녕하세요.")
    }, 1000);
}

task();

function add(a, b, callback){
    setTimeout(() => { // 첫번째콜백함수
        const sum = a + b;
        callback(sum)
    }, 3000);
}

add(1,2, (value) => { // 두번째 콜백함수
    console.log(value);
});
// add 함수가 호출되면서 setTimeout함수가 호출이 된다. 이 setTimeout함수는 callback함수를 3초뒤에 실행한다.
// 3초 뒤에 실행된 이 callback 함수(첫번째콜백함수)에서 sum이라는 값을 계산한 다음, 이 값이 지금 3인데 
// 계산한 다음 매개변수로 받은 이 callback 함수를 다시 호출하면서 이 값을 전달해 주게 되기 때문에 setTimeout함수가 끝나고 났을 때
// 이 callback 함수(두번째콜백함수)가 한번더 실행되면서 매개변수로 3이라는 값이 들어오게 되고, 그것이 콘솔에 출력이 되면서 개발자 도구의 콘솔에 3이 출력 됨


// 음식을 주문하는 상황

function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food)
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood)
    }, 2000);
}
function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood)
    }, 1500);
}
orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood)
        });
    });
});

// 이렇게 콜백함수를 이용하다보면 코드가 들여쓰기 되는 부분이 더 많이 생기게 된다. 이런 것을 콜백지옥이라고도 부르는데
// 피하기 위해 promise라는 비동기 작업를 도와주는 객체를 이용하면 된다. 