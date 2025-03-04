import { useState } from "react";
import './counter.css';


export default function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    return (
        <div className="background">
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )    
}