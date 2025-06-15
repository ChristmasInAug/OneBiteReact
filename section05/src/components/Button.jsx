const Button = ({children, text, color = "black"}) => {
    const onClickButton = (e) =>{
        console.log(e); // 이벤트 객체가 제공됨. 이 객체를 e라는 매개변수로 설정하고 출력해보면 
                        // syntheticBaseEnent라는 객체가 출력 됨. 이게 매개변수 e에 저장된 이벤트 객체이다.
                        // syntheticBaseEnent은 합성이벤트객체인데 모든 웹 브라우저 이벤틔 객체를 하나로 통일한 형태.
                        // 브라우져마다 규격도 다르고 동작방식이 달라 생기는 문제를 cross browsing issue 라고 함.
                        // 이 문제를 해결 하는 것이 syntheticBaseEnent, 합석 이벤트 객체이다. 
                        // 여러 부라우저들의 규격을 참고하여 하나의 통일된 규격으로 이벤트 객체를 포맷 해둔 것.
        console.log(text);
    }

    return (
        <button
            onClick = {onClickButton}
            /* onMouseEnter={onClickButton} */
            style={{color: color}}>
            {text} - {color.toUpperCase()} 
            {children} 
        </button> // toUpperCase()은 값이 없을 경우 에러가 발생. 이런 경우 props을 구조분해할당 문법을 이용하여 해결.
    );
};


export default Button;
