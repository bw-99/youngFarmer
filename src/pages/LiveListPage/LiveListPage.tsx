import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppBarComponentOnlyBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";
import { LiveTitleListComponent } from "../../common/LiveItem/liveItem";

function LiveListPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            {AppBarComponentOnlyBack("청년농부 라이브")}
            <div style={{padding: "10px 8px 24px 8px"}}>
                <LiveTitleListComponent />
            </div>
        </div>
    );
}

export default LiveListPage;