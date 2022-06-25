import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function MoneyCounter({amount}) {
    const [count, setCount] = useState(amount)
    const handleClickPlus = ()=>{
        setCount(count+100)
    }
    const handleClickMius = ()=>{
        setCount(count-100)
    }
    const handleClickZerro = ()=>{
        setCount(count-count)
    }

    return (
        <div>
            <p>Кількість грошей на рахунку: {count}</p>
            <button onClick={handleClickPlus} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Додати 100
            </button>
            <button onClick={handleClickMius} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Відняти 100
            </button>
            <button onClick={handleClickZerro} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Онулити
            </button>
        </div>
    );
}

export default MoneyCounter;