import { useState, useRef } from "react";
// 기존 Register1.jsx 파일에 name, birth, country, bio 공통된 내용이라 다 따로 작성하면 비효율적이다
// 이벤트핸들러도 하나로 합쳐볼 것


const Register=()=>{
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : ""
    });
    const countRef = useRef(0);
    const inputRef = useRef();
    console.log(countRef) // 콘솔에 current에서 확인 가능 
    // 즉, 래퍼런스 객체란 결국 current라는 프로퍼티에 현재 보관할 값을 담아두기만 하는 단순한 자바스크립트 객체이다.

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput ({
            ...input,
            [e.target.name] : e.target.value, 
            //  [e.target.name] : 새로운 객체를 만들면서 프로퍼티의 키 자리에 대괄호를 열고 변수의 이름을 쓰면, 
            //  e.target.name라는 변수의 값이 프로퍼티의 키로써 설정이 됨. 
        })
    }
    const onSubmit = () =>{
        if(input.name === ""){
            // 이름을 입력하는 Dom요소에 포커스 해줄 것.
            inputRef.current.focus();
        }
    }
    
    // const onChangeName = (e) => {
    //     console.log(e); // 콘솔->target->value클릭하면 저장된 이름 값을 확인 가능
    //    setInput({
    //     ...input, // 스프레드연산자로 input State에 들어있던 값들, name이 아닌 생일,국가 등 값들을 변경하지 않고 유지 시키도록 설정해줘야 한다. 
    //     // 만약 빼면 객체로만 inputState이 변경되기 때문에 기존에 생일, 국가 등은 사라지게 된다. 관련 없는 값들을 그대로 유지되도록 해줘야 함.
    //     name : e.target.value
    //    })
    // };
    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth : e.target.value
    //     })
    // }
    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country : e.target.value
    //     })
    // }
    
    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio : e.target.value
    //     })
    // };

    return (
        <div>
            
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} /> 
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;



// placeholder : 인풋에 사용자가 입력할 텍스트을 안내
// onChange : input의 값이 변경되었을 때를 의미하는 이벤트 핸들러
// select : 제한된 항목을 옵션으로 선택 하고 싶을 때.