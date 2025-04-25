import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const TestInput = () => {

    const [inputValue, setInput] = useState(0);
    const setValueInput = () => {
        setInput(inputValue + 1)
    }
    return (
        <div>
            <button value={inputValue} onClick={setValueInput}
                    className={'btn btn-sm btn-primary btn-hover btn-active'}> click
            </button>
            <p style={{color: "blue"}}>{inputValue}</p>
        </div>
    )
}
export default TestInput;