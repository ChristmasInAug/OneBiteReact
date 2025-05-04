// 조건문
/*
- 특정 조건을 만족 했을 때에만 실행되는 코드를 작성하기 위한 문법
- 대표적으로 if, switch 조건문이 존재함.
*/

// 1. if 조건문(if문)
let num = 4;
if(num >= 10) {
    console.log("num은 10 이상입니다");
}
else if(num >= 5){
    console.log("num은 5 이상입니다.")
}
else if(num >= 3){
    console.log("num은 3 이상입니다.")
}

else {
    console.log("num은 2 이하 입니다.");
}
// '()'안에 조건식을 쓰고, '{}' 조건식이 만족 했을 때 수행할 코드를 작성.
// if로 시작해서 else로 끝나야 한다.
// else if()로 시작할 수 없고, else가 esle if 위에 있을 수 없다.

// 커서를 두고 ctrl(command) + / 하면 주석 처리 됨.

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if 보다 더 직관적.

let animal = "owl";
// ()안에는 변수가 들어감.
// switch는 case에서 일치하는 값이 나오면 그 아래 값들도 다 반환함. cat이면 그 아래 dog부터 tigher까지 다 반환해줌.
// 딱 cat만 조회하고 싶으면 break;를 넣어야함.
// 즉 switch문을 작성할 때는 break까지 함께 작성해줘야 함.
switch(animal) {
    case "cat": {
        console.log("고양이")
        break;
    }
    case "dog": {
        console.log("개")
        break;
    }
    case "bear": {
        console.log("곰")
        break;
    }
    case "snake": {
        console.log("뱀")
        break;
    }
    case "tigher": {
        console.log("호랑이")
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다.")
    }
    // 어떠한 케이스에도 해당 되지 않을 때 실행 할 코드는 default를 추가 하면 됨.
    // if의 else같은 것.
}

