import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register=()=>{
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");
    
    const onChangeName = (e) => {
        console.log(e); // 콘솔->target->value클릭하면 저장된 이름 값을 확인 가능
        setName(e.target.value);
    };
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeBio = (e) => {
        setBio(e.target.value);
    }


    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder={"이름"} /> 
            </div>
            <div>
                <input value={birth} onChange={onChangeBirth} type="date" />
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} />
            </div>
        </div>
    )
}

export default Register;



// placeholder : 인풋에 사용자가 입력할 텍스트을 안내
// onChange : input의 값이 변경되었을 때를 의미하는 이벤트 핸들러
// select : 제한된 항목을 옵션으로 선택 하고 싶을 때.