import styled from "styled-components";

export const AppBarMainBox = styled.div`
    width: 100vw;
    height: 56px;
    ackground-color: #ffffff;
    display:flex;
    justify-content: space-between;
`
export const TopText = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #272727;
`
export const AvailablePointBox = styled.div`
    /* width: 593px; */
    width: calc(100vw - 32px);
    height: 80px;
    border-radius: 12px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to bottom, #fb6159, #ed3e3e);
`
export const AvailablePoint = styled.div`
    opacity: 0.9;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
`
export const PointAmount = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 26px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #fff;
`
export const UpdateDate = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #979797;
`
export const SeparateBar = styled.div`
    height: 8px;
    background-color: #f4f4f4;
`
export const PointDetailBox = styled.div`
    height: 80px;
`
export const PointDetailContent = styled.div`
    text-align: left;
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #272727;
`
export const PointDetailDate = styled.div`
    text-align: left;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #b3b3b3;
`
export const PointDetailAmountPlus = styled.div`
    text-align: right;
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #fb6159;
`
export const PointDetailAmountMinus = styled.div`
    text-align: right;
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #979797;
`
export const SeparateLine = styled.div`
    width: 593px;
    height: 1px;
    margin: 0 16px;
    background-color: #f2f2f2;
`