import styled from "styled-components";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";

export const TopImageComp = () => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <ImageSize src={recommendItemStawberry} />
            <ImageCover />
            <BottomBox>
                <div style={{padding: "4px 11px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <BottomBoxCurPage> 1 </BottomBoxCurPage>
                    <BottomBoxTotalPage> /10 </BottomBoxTotalPage>
                </div>
            </BottomBox>
        </div>
    )
}

export const ImageSize = styled.img`
  height: 375px;
  object-fit: cover;
  width: 100vw;
  position: absolute;
  z-index: -10;
  top: 0;
`


export const ImageCover = styled.div`
  height: 146px;
  opacity: 0.6;
  position: absolute;
  z-index: -10;
  width: 100vw;
  top: 0;
  background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0.88) 31%, rgba(0, 0, 0, 0));
`

export const BottomBox = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 273px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomBoxCurPage = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
`

export const BottomBoxTotalPage = styled.div`
  opacity: 0.5;
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
`