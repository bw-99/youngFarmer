import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { ItemUnitListComp } from "../../common/ItemList/ItemList";
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
                {ItemUnitListComp(165)}
            </div>
        </AppFrame>
        
    );

}

export default TodayRecommendPage;