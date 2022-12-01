import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { ItemUnitListComp } from "../../common/ItemList/ItemList";
import { RootState } from "../../reducers";
import { ProductDataType } from "../../reducers/ProductReducer";

function TodayRecommendPage() {
    const recommendData:ProductDataType[] = useSelector((state : RootState) => state.SearchDetailReducer.recommendResult);

    const dispatch = useDispatch();

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="오늘의 추천 상품"/>
            <div style={{padding: "10px 9.5px 20px 9.5px"}}>
                <ItemUnitListComp image_width={165}  product_list={
                    [
                        ...recommendData
                    ]
                }/>
            </div>
        </AppFrame>
        
    );

}

export default TodayRecommendPage;