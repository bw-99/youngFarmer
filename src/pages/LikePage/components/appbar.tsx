import { AppBar, AppBarArrow, AppBarTitle } from "../atoms/appbar"

import { NotiComponent } from "../../../common/NotiIcon/NotiIcon"
import { ShoppingBagIconComponent } from "../../../common/ShoppingBagIcon/ShoppingBagIconComponent"
import { BackIconComponent } from "../../../common/BackIcon/BackIcon"
import { useState, useEffect } from "react"

export const AppBarComponent = () => {
    // ? 찜하기랑 뒤에 앱바 아이콘 겹치는 방법이 없을까? 이게 최선인가
    
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        console.log(width);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div >
            <div>
                <AppBar>
                    <BackIconComponent />
                    <div>
                        <NotiComponent />
                        <ShoppingBagIconComponent />
                    </div>
                    
                </AppBar>
            </div>
            {/* <div style={{display:"flex", justifyContent: "center", alignItems:"center", width: "100vw"}}> */}
                <div style={{position:"absolute", zIndex: 10, top:0, margin:`0 ${(width-47)/2}px`}}>
                    <AppBarTitle> 찜하기 </AppBarTitle>
                </div>
            {/* </div> */}
            
        </div>
        
        
    )
}