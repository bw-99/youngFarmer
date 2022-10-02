import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Main.module.css";
import styled from 'styled-components';
import {FrontPage, BottomSheet} from "./Main.components";
 
export function Main(){
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("asdfdsf");
        return ()=>{
            console.log("unmounnt");
        }
    },[number]);

    return (
        <div className={styles.mainContent}>
            {/* AppBar */}
            <div className={styles.appBar}> </div>
            <div className={styles.upTextBox}> <FrontPage></FrontPage> </div>
            <div className={styles.bottomSheet}> <BottomSheet></BottomSheet> </div>
        </div>
    );
}



