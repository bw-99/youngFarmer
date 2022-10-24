import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { ItemUnitListComp } from "../../common/ItemList/ItemList";
import { ProductDataType } from "../../reducers/ProductReducer";
import { CALL_LOGIN } from "../SplashPage/SplashActions";

function TodayRecommendPage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <AppFrame>
            {AppBarComponentOnlyBack("오늘의 추천 상품")}
            <div style={{padding: "10px 9.5px 20px 9.5px"}}>
                <ItemUnitListComp image_width={165}  product_list={
                    [
                        {
                            product_id: 1
                        } as ProductDataType,
                        {
                            product_id: 1
                        } as ProductDataType
                    ]
                }/>
            </div>
        </AppFrame>
        
    );

}

export default TodayRecommendPage;