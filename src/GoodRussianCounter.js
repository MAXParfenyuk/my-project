import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function GoodRussianCounter(props) {
    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count+1)
    }
    console.log(count);
    return (
        <div>
            <p>Кількість вбитих москалів: {count}</p>
            <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
        </div>
    );
}

export default GoodRussianCounter;