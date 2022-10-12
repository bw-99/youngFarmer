import styled from "styled-components";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ImageSize, ImageCover, BottomBox, BottomBoxCurPage, BottomBoxTotalPage } from "../atoms/topImage";
import topExampleIcon from "../../../assets/images/rectangle@3x.png";

export const TopImageComp = () => {
    return (
        <div style={{ display: "flex", height: "310px", alignItems: "center", justifyContent: "center"}}>
            <ImageSize style={{maxWidth: "767px", }} src={topExampleIcon} />
            <ImageCover style={{maxWidth: "767px", }}/>
            <BottomBox>
                <div style={{padding: "4px 11px", display: "flex",  justifyContent: "center"}}>
                    <BottomBoxCurPage> 1 </BottomBoxCurPage>
                    <BottomBoxTotalPage> /10 </BottomBoxTotalPage>
                </div>
            </BottomBox>
        </div>
    )
}