// 비동기 작업 처리하기 2. Promise
// promise란 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// promise객체는 비동기작업을 감싸는 객체.
/*
promise 효능
비동기 작업 실행
비동기 작업 상태 관리
비동기 작업 결과 저장
비동기 작업 병렬 실행
비동기 작업 다시 실행 
기타 등등

promise의 3가지 상태
대기(Pending) : 아직 작업이 완료되지 않은 상태
성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
실패(Refected) : 비동기 작업이 실패한 상태

해결(resolve) : 대기 -> 성공
거부(reject) : 대기 -> 실패
ex)
유튜브에서 동영상을 시청한다면, 
유튜브 영상 로딩중 : 대기상태
영상로딩 완료 : 해결
시청 가능 상태 : 성공
영상로딩 실패 : 거부
시청 불가능한 상태 : 실패
*/

const promise = new Promise((resolve, reject) => { // 생성자의 인수로는 비동기 작업을 실제로 진행할 콜백 함수를 넣으면 된다.
    // 비동기 작업 실행하는 함수
    // executor라고 함.
    
    setTimeout(() => {
        const num = null;
        if(typeof num === 'number') {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다.")
        }
    }, 2000);

});

console.log(promise);
// 콘솔창에 내부상태를 보면
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined - 결과값
// chapter13.js:34 안녕

// then 메서드
// -> 그 후에
promise.then((value) => { // reslove 인수로 전달한 결과값을 매개변수로 제공해준다. 그래서 value가 20을 받아와서 콘솔에 20을 보여준다.
    console.log(value)
}).catch((error) => { // promise를 다시 반환해준다. 그래서 따로 catch메서드를 호출하는것이 아니라 이렇게 연결해서 사용도 가능하다.
    console.log(error)
})
// 지금처럼 than()와 catch()를 연달아 사용하는 문법을 chaining하는 것 같다라고 하여 Promise Chaining이라고 표현 한다.

// catch 메서드
// reject 일 때 사용하는 then과 같은 메서드
promise.catch((error) => {
    console.log(error)
})

setTimeout(() => {
    console.log(promise);
}, 3000);


// 
function add10(num) {
    const promise = new Promise((resolve, reject) => { 
    
    setTimeout(() => {
        
        if(typeof num === 'number') {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다.")
        }
    }, 2000);
    
    return promise;
});
}

const p = add10(0);
p.then((result) => {
    console.log(result);
    
    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });
});

// 콜백지옥에 빠지지 않기위해 아래와 같이 작성 할 수있다.
/*
const p = add10(0);
p.then((result) => {
    console.log(result);
    
    const newP = add10(result);
    return newP;
}).then((result) => {
    console.log(result);
    return add10(result);
    })
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error);
    });

*/
