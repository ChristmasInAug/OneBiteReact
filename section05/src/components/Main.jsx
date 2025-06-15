import "./Main.css"

/*
JSX 주의 사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 숫자,문자 같은 것 가능, if나 for같은 것은 안됨.
2. 숫자, 문자열, 배열 값만 랜더링 된다. null, boolean 같은 것은 안됨. 
    obj 객체를 그대로는 랜더링 할 수 없고, obj.a와 같이 점표기법을 사용하여 랜더링 할 수 있다. 
3. 모든 태그는 닫혀 있어야 한다.
4. 최상위 태그는 반드시 하나여야만 한다. 
    retunr()에서 최상위 태그는 하나만 여야 한다. 여기서는 <main></main>이다. 다른 태그가 같이 있으면 안된다.
    빈태그로 되어 있어도 괜찮다. 최상위 태그로 인식함. 
*/

const Main = () => {
    const user = {
        name : "이정환",
        isLogin : true,
    }

    /* return(
        <>
        {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}

        </>
    ) */
   if(user.isLogin){
    return <div className="logout">로그아웃</div>
   } else{
    return <div>로그인</div>
   }
}

export default Main;
