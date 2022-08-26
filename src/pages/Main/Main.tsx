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
        <div className={styles.mainContent}>
            {/* AppBar */}
            <div className={styles.appBar}> </div>
            <div className={styles.upTextBox}> <FrontPage></FrontPage> </div>
            <div className={styles.bottomSheet}> <BottomSheet></BottomSheet> </div>
            
        </div>
    );
}



function FrontPage(){
    return (
        <div>
            <div>
                <span >트래시프리님 이웃은,</span>
                <br></br>
                <span>이번 달</span>
                <br></br>
                <span className={styles.upText}>34분</span>
                <span>을 아끼셨어요</span>
            </div>

            <div className={styles.upTextUnderline}>

            </div>
            
            <div className={styles.frontImgBox}>
                <div className={styles.frontImg}>
                    <img src="https://via.placeholder.com/215x234" alt="" />
                </div>
            </div>
        </div>
    );
}

function BottomSheet(){
    return (
        <div >
            <BottomSheetTop></BottomSheetTop>
            <BottomSheetBottom></BottomSheetBottom>
        </div>
    )
}

function BottomSheetTop(){
    return (
        <div>
            <BottomSheetTitle></BottomSheetTitle>
            <BottomSheetSubscribe></BottomSheetSubscribe>
            <BottomSheetLine></BottomSheetLine>
        </div>
    )
}

function BottomSheetTitle(){
    return (
        <span className={styles.bottomSheetInfoText}>
            이용 중인 구독 서비스가 없습니다.
        </span>
    );
}

function BottomSheetLine(){
    return (
        <div className={styles.bottomSheetLine}></div>
    );
}

function BottomSheetSubscribe(){
    return (
        <div className={styles.bottomSheetInfoUI}>
            <div className={styles.bottomSheetInfoUItext}>
                <span>
                    트래시프리를 구독하고
                </span>
                <br />
                <span>
                    생활쓰레기를 편하게 처리해보세요
                </span>
            </div>

            <div className={styles.bottomSheetInfoUIButton}>
                <div className={styles.bottomSheetInfoUIButtonText}>
                    구독하기
                </div>
            </div>
            
        </div>
    );
}



function BottomSheetBottom(){

    let magazineList= [];

    for(let i = 0; i<2 ; i++){
        magazineList.push(BottomSheetMagazineItem());
    }

    return (
        <div>
            <BottomSheetMagazineText></BottomSheetMagazineText>
            {magazineList}
        </div>
    )
}


function BottomSheetMagazineText(){
    return (
        <div className={styles.bottomSheetMagazineText}>
            트래시프리 MAGAZINE
        </div>
    );
}


function BottomSheetMagazineItem(){
    return (
        <div className={styles.bottomSheetMagazineItem}>
            <div className={styles.bottomSheetMagazineItemText}>
                <span>
                    집에 쓰레기를
                </span>
                <br></br>
                <span>
                    방치했을 경우?
                </span>
            </div>
            <div className={styles.bottomSheetMagazineItemImage}>
                <img src="https://via.placeholder.com/147x88" alt="" />
            </div>
        </div>
    );
}
