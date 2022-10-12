import styled from "styled-components";


export const BannerAtom = styled.img`
  width: 100vw;
  object-fit: cover;
`


export const MainTextLight = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #272727;
    line-height: 1.5;
`

export const BannerBackgroundAtom = styled.div`
  height: 116px;
  width: 100vw;
  background-image: linear-gradient(to left, #fd9a92, #fb6159);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BannerTextLightAtom = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: #ffffff;
`

export const BannerTextBoldAtom = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.33;
  color: #ffffff;
`


export const BannerButton = styled.div`
  width: 86px;
  height: 28px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  color:rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`


export const BannerImage = styled.img`
  width: 120px;
  height: 102px;
  object-fit: cover;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  margin-right: 26px;
`

export const BannerCircleOne = styled.div`
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: #d93027;
  border-radius: 50%;
  margin-right: 3px;
  margin-top: 75px;
`

export const BannerCircleTwo = styled.div`
  width: 50px;
  height: 50px;
  opacity: 0.25;
  background-color: #d93027;
  border-radius: 50%;
`