// 콜백함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함.

/*
function main(value) {
value();
}

function sub(){
console.log("sub")
}

main(sub);
=> console에 sub가 출력 될 것임. 
=> main함수에 value라는 매개변수에 sub()함수가 인수로 들어감. 그리고 sub()함수가 실행되어 sub가 출력됨
=> 이 때 사용된 sub()가 콜백 함수.
*/

// 1. 콜백함수
function main(value){
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub(){
    console.log("i am sub");
}
main(sub);

// 왜 콜백이라 하는가?
// 콜백이라는 뜻이 프로그래밍에서는 뒷전에, 나중에 실행되는 것이라는 뜻.

// 2. 콜백함수의 활용

function repeatTest(count){
    for (let idx = 1; idx <= count; idx++){
        console.log(idx);
    }
}

function repeatDouble(count){
    for (let idx = 1; idx <= count; idx++){
        console.log(idx * 2);
    }
}

repeatTest(5);
repeatDouble(5);
// 2배 3배 할 때마다 함수를 새로 작성하면 코드의 중복에 좋지 않다. 이럴 때 콜백 함수 사용

function repeat(count, callback){
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

repeat (5, function(idx) {
    console.log(idx);
});

repeat (5, function(idx) {
    console.log(idx*2);
});
