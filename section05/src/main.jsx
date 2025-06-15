import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

    <App /> // root 컴포넌트

)

/*
stric-mode 란 개발모드로 리액트 앱를 실행하고 있을 때, 작성한 코드에 잠재적인 문제가 있는지 
내부적으로 검사해서 경고해주는 도구. 

eslint 설치 
작성하는 코드를 정적으로 검사하여 혹시나 오류가 발생할만한 코드가 있으면 경고를 띄어주는 프로그램
코드르를 직접 실행하기 전에 오류를 vscode에서 확인 할 수 있음
*/