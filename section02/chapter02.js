// 단락 평가(Short-circuit Evaluation)이란?

// 단락 평가란, let varA = false;, let varB = true; console.log(varA && varB); 에서
// &&, || 와 같이 논리 연산식에서 varA같이 첫번째 피연산자의 값만으로 해당 연산의 결과를 확정할 수 있다면, 
// 그 때에는 두번 째의 값 varB에는 아예 접근하지 않는 js의 특징을 말하는 것.

function returnFalse() {
    console.log("False 함수");
    return false;
}

function retrunTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && retrunTrue());
// flase함수만 출력이 돼고, true 함수는 출력조차 되지 않는다 왜냐하면 단락평가가 진행되었기 때문.

console.log(retrunTrue() && returnFalse());

console.log(retrunTrue() || returnFalse());

// 이러한 단락평가는 boolean 값만 아니라 truthy, flasy값에도 적용이 된다.

function returnFalse1() {
    console.log("False 함수");
    return undefined;
}

function retrunTrue1() {
    console.log("True 함수");
    return 10;
}
console.log(retrunTrue1() || returnFalse1());

console.log(returnFalse1() && retrunTrue1());

// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}
printName();
printName({name : "박정하"});