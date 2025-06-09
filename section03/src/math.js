// math 모듈
function add(a,b) {
    return a + b;
}

function sub(a, b){
    return a - b;
}

export default function multiply(a,b) {
    return a * b;
}

// cjs
// module.exports = {
//     add : add, // key와 변수가 같을 경우 add 하나만 작성해도 됨.
//     sub : sub,
// }
// 2개의 함수를 내보내게 되면 cjs에 의해서 내보내진다.

// ES module
// package.json에 "type": "module" 추가 해야함.
export {add, sub};
// cjs보다 훨씬 간결하다.
// export function add(a,b) 바로 선언해도 됨.