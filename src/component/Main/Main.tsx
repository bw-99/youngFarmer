import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Main.module.css";


export function Main(){
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("asdfdsf");
        return ()=>{
            console.log("unmounnt");
        }
    },[number]);

    return (
        <div className={styles.upTextBox}>
            <span >트래시프리님 이웃은,</span>
            <br></br>
            <span>이번 달</span>
            <br></br>
            <span className={styles.upText}>34분</span>
            <span>을 아끼셨어요</span>
        </div>
        );
}
