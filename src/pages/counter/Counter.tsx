import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Counter.module.css";

export function CounterFunction(){
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("asdfdsf");
        return ()=>{
            console.log("unmounnt");
        }
    },[number]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=> setNumber(number+1)}>Click Me</button>
        </div>
        );
}
