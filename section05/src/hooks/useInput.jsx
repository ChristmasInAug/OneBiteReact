import { useState } from "react";

function useInput() { // 나만의 훅 커스텀
    const [input, setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value)
    };

    return [input, onChange];
}

export default useInput;