// 비동기 작업 처리하기 3. async / await

// async
// 함수 앞에 붙이는 키워드로서 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환 해주는 그런 키워드

async function getData() {
    return{
        name : "박정하",
        id : "winterlood",
    }
}
// async를 붙여주면 비동기 함수로 바뀐다. 객체를 그대로 반환하는 함수가 아니라 
// 이 객체를 결과값으로 갖는 새로운 프로미스를 봔환하는 함수로 변환한다는 것.

//console.log(getData());

// async는 await 와 함께 사용 할 때 효과가 좋다.
// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되길 기다리는 역할

async function printData() {
   const data = await getData();
   console.log(data);
}
printData();