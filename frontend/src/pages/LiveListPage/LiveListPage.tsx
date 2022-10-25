import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";
import { LiveTitleListComponent } from "../../common/LiveItem/liveItem";
import React from "react";

function LiveListPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="청년농부 라이브"/>
            <div style={{padding: "10px 8px 24px 8px"}}>
                <LiveTitleListComponent />
            </div>
        </AppFrame>
    );
}

export default LiveListPage;