import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // 배열을 받을 것이기에 배열의 비구조화 활당 문법을 이용함
   // 0과1 배열이 출력 됨. 0은 우리가 설정한 초기값, state의 값이고 
  // 두번 째 1은 함수인데 state 값을 변경하는 즉 상태를 변화시키는 함수. 상태 변화 함수라고 부른다.
  // 새로운 state를 생성하는 useState 함수는 인수로는 state의 초기값을 받아서 2개의 요소를 담은 배열을 반환하는데,
  // 첫번째 요소은 state의 현재 값이고 두번째 요소는 이 state을 변화 시키는 상태 변화 함수 이다.

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{
          setCount(count + 2312321412)
        }}>+</button>
      </div>
  )
}

export default Counter;