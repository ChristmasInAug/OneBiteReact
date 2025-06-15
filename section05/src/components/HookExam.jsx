import useInput from "./../hooks/useInput";

/*
3가지 hook 관련된 팁
1. 함수 컴포넌트, 커스텀 혹 내부에서만 호출 가능
2. 조건부로 호출 될 수 없다.
3. 나만의 훅(custom Hook) 직접 만들 수 있다.
*/

// const state = useState(); hook을 함수 컴포넌트 내부에서만 호출해야함 아님 에러 뜸.


const HookExam = () => {
    
    const [input, onChange] = useInput();

    // if(true) {
    //     const state = useState();
    //     // 조건문, 반복문 내에서 훅을 호출하게 되면 서로 다른 훅들의 호출 순서가 엉망이 되어 버리는 현상이 발생해서 내부적인 오류가 발생 함.
    // }


    //const state = useState(); 함수 내부에서만 훅 호출 가능.

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
    
};

export default HookExam;