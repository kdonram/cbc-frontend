import { useState } from "react";
import './counter.css';

export default function Counter() {
    const [countS, setCountS] = useState(0);
    const [countT, setCountT] = useState(0);
    const [countST, setCountST] = useState(0);
    const [name, setName] = useState("Students");

    function increment(type) {
        if (type === "Students") setCountS(countS + 1);
        else if (type === "Teachers") setCountT(countT + 1);
        else if (type === "Staffs") setCountST(countST + 1);
    }

    function decrement(type) {
        if (type === "Students" && countS > 0) setCountS(countS - 1);
        else if (type === "Teachers" && countT > 0) setCountT(countT - 1);
        else if (type === "Staffs" && countST > 0) setCountST(countST - 1);
    }

    function changeCountType(type) {
        setName(type);
    }

    return (
        <div className="background">
            <h1>{name}</h1>
            <button onClick={() => increment(name)}>+</button>
            <span>
                {name === "Students" ? countS : name === "Teachers" ? countT : countST}
            </span>
            <button onClick={() => decrement(name)}>-</button>
            <div className="who">
                <button className="type" onClick={() => changeCountType("Students")}>Students</button>
                <button className="type" onClick={() => changeCountType("Teachers")}>Teachers</button>
                <button className="type" onClick={() => changeCountType("Staffs")}>Staffs</button>
            </div>
        </div>
    );
}
