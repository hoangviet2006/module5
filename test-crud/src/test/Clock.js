import {useEffect, useState} from "react";


const Clock = () => {
    const [time, setTime] = useState(0)
    const setTimeClick = () => {
        setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)
    }
    return (
        <div>
            <p>{time}</p>
            <button onClick={setTimeClick}>Bắt đầu</button>
        </div>
    )
}
export default Clock;