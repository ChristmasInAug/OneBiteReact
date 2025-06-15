import './App.css';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/footer';
import Button from './components/Button';
import Bulb from './components/Bulb';
import Counter from './components/Counter';
//import { useState } from 'react'; // 리액트가 제공하는 내장함수를 사용하여 state를 만듦
import Register from './components/Register';
import HookExam from './components/HookExam';

/*
자바스크립트 함수가 html태그를 반환하도록 설정 할 수 있으며 이렇게 반환하는 함수를 컴포넌트라고 부른다
그리고 컴포너는 이름을 함수 이름을 따와서 App 컴포넌트 이런 식으로 부른다.

function Header() {} 또는 const Header = () => {} 화살표함수로 해도 뭐든 상관없다
class를 이용해서 할 수 도 있으나 작성해야 할 코드가 많아지기에 함수 컴포넌트를 많이 사용한다

주의점
컴포넌트를 생성하는 함수의 이름은 첫글자를 항상 대문자로 작성해야 한다
소문자로 할 경우 리액트 내부적으로 이 함수를 컴포넌트로 인정하지 않는다

모듈화하여 컴포넌트를 나눠서 작성한다
*/



function App() {
  
  const buttonProps = {
    text : "메일",
    color : "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    // {...buttonProps} 스프레드 연산자을 이용하면 값을 일일이 다 전달할 필요 없다.
    <>
      <div>
        <HookExam />
      </div>
      <div>
        <Bulb />
      </div>
      <div>
        <Button {...buttonProps} /> 
        <Button text = {"카페"} />
        <Button text = {"블로그"} >
          <div>자식 요소</div>
        </Button>
      </div>
      <Counter />
      <div> {/*state로 사용자 입력 관리하기1*/}
        <Register />
      </div>

      
    </>
    // props에는 문자열, 숫자 등 일반적인 자바스크립트 값만 아니라 html요소나 리액트 컴포넌트까지도 전달 가능.
  )
}

export default App
